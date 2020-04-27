pragma solidity >=0.4.22 <0.7.0;

/**
 * @title Storage
 * @dev Store & retreive value in a variable
 */
contract mSS {

    uint256 public number;

    function store(uint256 num) public {
        number = num;
    }

    function retreive() public view returns (uint256){
        return number;
    }
}