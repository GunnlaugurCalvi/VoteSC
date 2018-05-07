const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledElection = require('../build/ElectionCreation.json');
const compiledBallot = require('../build/Ballot.json');

let accounts;
let election;
let ballotAddress;
let ballot;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    election = await new web3.eth.Contract(JSON.parse(compiledElection.interface))
                .deploy({ data: compiledElection.bytecode })
                .send({ from: accounts[0], gas: '1000000' });
    

    await election.methods.createElection(["0x6672696b6a000000000000000000000000000000000000000000000000000000","0x4472696b6a000000000000000000000000000000000000000000000000000000"], ["0x6e6f727468000000000000000000000000000000000000000000000000000000"])
        .send({ from: accounts[0], gas: 1000000 });
    
    [ballotAddress] = await election.methods.getDeployedBallots().call();
    ballot = await new web3.eth.Contract(JSON.parse(compiledBallot.interface), ballotAddress);

});

describe('Ballots', () => {
    it('deploys a election and a ballot', () => {
        console.log(election.options.address);
        assert.ok(election.options.address);
        console.log(ballot.options.address);
        assert.ok(ballot.options.address);
    });

    it('marks the call as the election chairperson', async() => {
        const chairperson = await ballot.methods.chairperson().call();
        assert.equal(accounts[0], chairperson);
    });

    it('allows people to vote and marks them that they have voted and get right result of winning proposal', async() => {
        await ballot.methods.vote('0').send({
            from: accounts[1]
        });
        await ballot.methods.vote('1').send({
            from: accounts[2]
        });
        await ballot.methods.vote('0').send({
            from: accounts[3]
        });
        await ballot.methods.vote('0').send({
            from: accounts[4]
        });
        await ballot.methods.vote('1').send({
            from: accounts[5]
        });
        await ballot.methods.vote('0').send({
            from: accounts[6]
        });
        await ballot.methods.vote('1').send({
            from: accounts[7]
        });
        await ballot.methods.vote('1').send({
            from: accounts[8]
        });
        await ballot.methods.vote('1').send({
            from: accounts[9]
        });
        const haveVoted = await ballot.methods.voters(accounts[1]).call();
        assert(haveVoted);
   
        const winner = await ballot.methods.winnerName().call();
        // console.log(winner);
        assert.equal(winner, "0x4472696b6a000000000000000000000000000000000000000000000000000000");   
    });

    it('Chairman can only call the winningProposal', async () => {

        await ballot.methods.vote('0').send({
            from: accounts[1]
        });
        await ballot.methods.vote('1').send({
            from: accounts[2]
        });
        await ballot.methods.vote('0').send({
            from: accounts[3]
        });
        await ballot.methods.vote('0').send({
            from: accounts[4]
        });
        await ballot.methods.vote('0').send({
            from: accounts[5]
        });
        await ballot.methods.vote('0').send({
            from: accounts[6]
        });
        await ballot.methods.vote('0').send({
            from: accounts[7]
        });
        await ballot.methods.vote('1').send({
            from: accounts[8]
        });
        await ballot.methods.vote('1').send({
            from: accounts[9]
        });

        const winner = await ballot.methods.winningProposal().call({
            from: accounts[0]
        });

        assert.equal(winner, '0');

        try {
            await ballot.methods.winningProposal().call({
                from: account[1]
            });
            assert(false);
        } catch (error) {
            assert(error);
        }
    });
}); 