pragma solidity ^0.4.17;

contract ElectionCreation {
    address[] public deployedBallots;
    /*
        Creates a set of smart contracts with a list of candidates for each voting district given
    */
    constructor (bytes32[] candidates, bytes32[] district) public {
        for(uint i = 0; i < district.length; i++){
            address newBallot = new Ballot(candidates, district[i], msg.sender);
            deployedBallots.push(newBallot);
        }
    }
    //Returns the addresses of each of the smart contracts created and deployed
    function getDeployedBallots() public view returns(address[]) {
        return deployedBallots;
    }
        
}

contract Ballot {

    // This is a type for a single proposal.
    struct Proposal {
        bytes32 name;
        uint voteCount;
        uint creationDate;
    }
	
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
                voteCount: 0,
                creationDate: now
            }));
        }
    } 
    function vote(uint proposal) public{
        //Check if voter has voted already
        require(!voters[msg.sender]);
        /*After 30 seconds have passed, the election should be over and therefore no one should be 
          allowed to vote after the time limit has been reached. The time limit can be changed for 
          each election which is created.*/
        if(now >= proposals[proposal].creationDate + 30 seconds){
            revert();   
        }
            //Increase selected proposal voteCount by 1
            proposals[proposal].voteCount += 1;
            //Set voter as already voted
            voters[msg.sender] = true;
    }
    //Returns name of candidate from index
    function getCandidateName(uint index) public restricted view
            returns (bytes32)
    {
        return proposals[index].name;
    }
    //Returns the amount of votes the candidate at index has recieved in this particular voting district
    function getVoteCount(uint index) public view 
            returns (uint)
    {
        return proposals[index].voteCount;
    }

}