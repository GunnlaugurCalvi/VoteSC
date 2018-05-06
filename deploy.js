const Web3 = require('web3');
const compiledElectionCreation = require('./build/ElectionCreation.json');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledElectionCreation.interface))
        .deploy({ data: '0x' + compiledElectionCreation.bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    console.log('Constract deployed to ', result.options.address);
};
deploy();