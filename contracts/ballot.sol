pragma solidity ^0.4.17;

contract ElectionCreation {
    address[] public deployedBallots;
    
    constructor (bytes32[] candidates, bytes32[] district) public {
        
        for(uint i = 0; i < district.length; i++){
            address newBallot = new Ballot(candidates, district[i], msg.sender);
            deployedBallots.push(newBallot);
        }
    }
    
    function getDeployedBallots() public view returns(address[]) {
        return deployedBallots;
    }
        
}

contract Ballot {

    // This is a type for a single proposal.
    struct Proposal {
        bytes32 name;
        uint voteCount;
        
    }
	
	// A dynamically-sized array of `Proposal` structs.
    Proposal[] public proposals;
    address public chairperson;
    bytes32 public votingDistrict;
    // This declares a state variable that
    // stores a `Voter` struct for each possible address.
    mapping(address => bool) public voters;


    //Restrictes access of function to only Election administrator
    modifier restricted() {
        require(msg.sender == chairperson);
        _;
    }
    
    /// Create a new ballot to choose one of `proposalNames`.
    constructor (bytes32[] proposalNames, bytes32 district, address creator) public {
        chairperson = creator;
        votingDistrict = district;
        // For each of the provided proposal names,
        // create a new proposal object and add it
        // to the end of the array.
        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    } 
    function vote(uint proposal) public{
        //Check if voter has voted already
        require(!voters[msg.sender]);
        //Increase selected proposal voteCount by 1
        proposals[proposal].voteCount += 1;
        //Set voter as already voted
        voters[msg.sender] = true;
    }

    function winningProposal() public restricted view
            returns (uint winProposal)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winProposal = p;
            }
        }
    }

    // Calls winningProposal() function to get the index
    // of the winner contained in the proposals array and then
    // returns the name of the winner
    function winnerName() public restricted view
            returns (bytes32 winName)
    {
        winName = proposals[winningProposal()].name;
    }
}