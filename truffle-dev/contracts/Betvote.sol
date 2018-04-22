pragma solidity ^0.4.21;



contract Betvote {

    struct EntityStruct {
        // The address
        address entityAddress;
        // Amount of bet in wei
        uint256 amount;
        // you are betting to?
        string betTo;
        uint256 position;
    }

    EntityStruct[] public entityA;
    EntityStruct[] public entityB;


    // global variable

    address fundingAddress;
    address owner;
    string winner;
    uint256 totalFundA;
    uint256 totalFundB;
    uint256 rewardRatio;

    event winnerAnnounced(string winner);



    // Ref "github.com/ethereum/dapp-bin/library/stringUtils.sol";
    function compare(string _a, string _b) public returns (int) {
        bytes memory a = bytes(_a);
        bytes memory b = bytes(_b);
        uint minLength = a.length;
        if (b.length < minLength) minLength = b.length;
        //@todo unroll the loop into increments of 32 and do full 32 byte comparisons
        for (uint i = 0; i < minLength; i ++)
            if (a[i] < b[i])
                return -1;
            else if (a[i] > b[i])
                return 1;
        if (a.length < b.length)
            return -1;
        else if (a.length > b.length)
            return 1;
        else
            return 0;
    }
    /// @dev Compares two strings and returns true iff they are equal.
    function equal(string _a, string _b) public returns (bool) {
        return compare(_a, _b) == 0;
    }



    function Betvote() public {
        owner = msg.sender;

    }





    function getBet(string betTo) public payable {
        EntityStruct memory newEntity;
        uint256 value = msg.value;
        require (value > 0);
        address userAddr = msg.sender;

        if (equal(betTo, "a")){
            if(entityA.length == 0){
                // set entity data
                newEntity.entityAddress = userAddr;
                newEntity.betTo = betTo;
                newEntity.amount = value;
                newEntity.position = 1;
                //push data entity to
                entityA.push(newEntity)-1;
                transferEther(fundingAddress, value);


            }
            else {
                // set entity data
                newEntity.entityAddress = userAddr;
                newEntity.betTo = betTo;
                newEntity.amount = value;
                newEntity.position = entityA.length+1;
                //push data entity to
                entityA.push(newEntity)-1;
                transferEther(fundingAddress, value);

            }

        }

        else if (equal(betTo, "b")){
            if(entityA.length == 0){
                // set entity data
                newEntity.entityAddress = userAddr;
                newEntity.betTo = betTo;
                newEntity.amount = value;
                newEntity.position = 1;
                //push data entity to
                entityB.push(newEntity)-1;
                transferEther(fundingAddress, value);

            }
            else {
                // set entity data
                newEntity.entityAddress = userAddr;
                newEntity.betTo = betTo;
                newEntity.amount = value;
                newEntity.position = entityA.length+1;
                //push data entity to
                entityB.push(newEntity)-1;
                transferEther(fundingAddress, value);

            }

        }


    }

    function transferEther(address _to, uint256 _value) public payable {
        _to.transfer(_value);
    }

    modifier ownerOnly {
        require(msg.sender == owner);
        _;
    }


    function setRewardRatio(uint256 size) internal returns(uint256){
        if ( size < 100){
            kill();
        }
        else if (size < 500){
            return 10;
        }
        else if (size < 1000){
            return 30;
        }
        else if (size < 2000){
            return 50;

        }
        else if (size < 5000){
            return 70;

        }
        else if (size < 7000){
            return 80;

        }
        else if (size < 10000){
            return 90;

        }

    }

    function fundSizePrecision (uint256 fundSize) internal returns(uint256){
        if ( fundSize < 100){
            return 100;
        }
        else if (fundSize < 1000){
            return 1000;
        }
        else if (fundSize < 10000){
            return 10000;
        }
        else if (fundSize < 100000){
            return 100000;
        }
        else if (fundSize < 1000000){
            return 1000000;
        }
    }

    // Refers to "https://github.com/ethereum/dapp-bin/pull/50"
    // gives floating point value????
    function sqrt(uint x) public returns (uint y) {
        uint z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }

    function calculateYourReward(uint256 position) internal returns(uint256){
        // precision 100
        return (1/sqrt(position))*100;

    }

    function setWinner (string _winner) public payable ownerOnly{
        winner =_winner;

        // this returns int
        if(equal(winner, "a")){
            uint256 size = entityA.length;
            // precision 100
            uint256 RewardRatio100 = setRewardRatio(size);
            uint256 fund = totalFundB;
            // precision varies
            uint256 precision = fundSizePrecision(totalFundA);

            for (uint i = 0; i<entityA.length; i++) {
                uint256 participationRatio100x = entityA[i].amount/totalFundA * precision;

                uint256 Ratio100x = calculateYourReward( entityA[i].position)+RewardRatio100;

                uint256 result = participationRatio100x*Ratio100x*totalFundB/10000;

                transferEther(entityA[i].entityAddress, result);

            }




        }
        /// fill it in
        else if(equal(winner, "b")){


        }


        // what does this do?
        // emit winnerAnnounced(winner);

    }

    function kill() public ownerOnly {
        selfdestruct(owner);
    }




    // for test purposes
    // test
    // test
    // test
    // test
    // Testing purpose only.
    // @todo : should delete this before release
    // Sets total fund amount
    function testTotalFundSetter () public {
        totalFundB = 100000;
    }



    event test_entity(address entityAddress, uint256 amount, string betTo, uint256 position);

    function getEntityA () public {
        for (uint i = 0; i<entityA.length; i++) {
            emit test_entity(entityA[i].entityAddress, entityA[i].amount, entityA[i].betTo, entityA[i].position );
        }
    }



    function test (uint256 number) public {

        entityA.push(EntityStruct(0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c, number, 'a', entityA.length))-1;
//        entityA.push(EntityStruct(0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c, 1286217770049595958, 'a', entityA.length))-1;

    }

}
