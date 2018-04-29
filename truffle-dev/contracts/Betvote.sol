pragma solidity ^0.4.21;


//Welcome!
//Before use this code, Please look into this code carefully, and make sure if it works exactly what you want. Since this code is dealing with Ethereum, using this code carelessly can cause losses in your fund.


// Creator : wk
// blog :
// - https://brunch.co.kr/@bitcoin
// - https://steemit.com/@icoreport
//- https://steemit.com/@wklee
//- https://thisiswk.com



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
    EntityStruct[] public entityC;


    // global variable
//    @todo : less global variables

    address owner;
    string winner;
    uint256 public totalFundA;
    uint256 public totalFundB;
    uint256 public totalFundC;
    uint256 rewardRatio;
    uint256[] public temporaryRatio_global;


    // event results will be shown in dev console.
    event winnerAnnounced(string winner);
    event newBet(address _to, string _betTo, uint256 amount);


//    @todo : comment, function and params
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


    // using hash to compare strings
    function compareStringsbyBytes(string s1, string s2) public pure returns(bool){
        return keccak256(s1) == keccak256(s2);
    }

// constructor
    function Betvote() public {
        owner = msg.sender;
    }



    function getBet(string betTo) public payable {
        EntityStruct memory newEntity;
        require (msg.value > 0);
        address userAddr = msg.sender;

        if (compareStringsbyBytes(betTo, "a")){
            // set entity data
            newEntity.entityAddress = userAddr;
            newEntity.betTo = betTo;
            newEntity.amount = msg.value;
            newEntity.position = entityA.length+1;

            // add total fund
            totalFundA = totalFundA + msg.value;
            //push data entity to
            entityA.push(newEntity)-1;
            // event newBet(address _to, string _betTo, uint256 amount);
            transferEther(owner, msg.value);
            emit newBet(owner, betTo, msg.value);
        }
        else if (compareStringsbyBytes(betTo, "b")){
            // set entity data
            uint256 amount = msg.value;
            newEntity.entityAddress = userAddr;
            newEntity.betTo = betTo;
            newEntity.amount = amount;
            newEntity.position = entityB.length+1;
            // add total fund
            totalFundB += amount;
            //push data entity to
            entityB.push(newEntity)-1;
            transferEther(owner, msg.value);//
            emit newBet(owner, betTo, msg.value);
        }
        else if (compareStringsbyBytes(betTo, "c")){
            // set entity data
            newEntity.entityAddress = userAddr;
            newEntity.betTo = betTo;
            newEntity.amount = msg.value;
            newEntity.position = entityC.length+1;
            // add total fund
            totalFundC += msg.value;
            //push data entity to
            entityC.push(newEntity)-1;
            transferEther(owner, msg.value);
            emit newBet(owner, betTo, msg.value);
        }
    }

    function transferEther(address _to, uint256 amount) public payable {
        _to.transfer(amount);
    }

    modifier ownerOnly {
        require(msg.sender == owner);
        _;
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


    event setWinnerPrinter (uint256 sumTemporaryRatio, uint256 tempRatio, uint256 amount, uint256 Ratio100x);

    function setWinner (string _winner) public payable ownerOnly{

        winner =_winner;

        uint256 sumTemporaryRatio;
        uint256 Ratio100x;
        uint256 amount;
        uint256 tempRatio;
        uint256 size;
        uint i = 0;
        // this returns int
        if(compareStringsbyBytes(winner, "a")){
            size = entityA.length;
            for (i = 0; i<entityA.length; i++) {
                // low as -2 digit
                Ratio100x = calculateYourReward(entityA[i].position);
                // more than 18 digits
                amount = entityA[i].amount;
                // take out the precision
                tempRatio = ( Ratio100x * amount /100 );
                temporaryRatio_global.push(tempRatio);
                sumTemporaryRatio += tempRatio;

                emit setWinnerPrinter (sumTemporaryRatio, tempRatio, amount, Ratio100x);
            }
        }
        /// fill it in
        else if(compareStringsbyBytes(winner, "b")){
            size = entityB.length;
            for (i = 0; i<entityB.length; i++) {
                // low as -2 digit
                Ratio100x = calculateYourReward(entityB[i].position);
                // more than 18 digits
                amount = entityB[i].amount;
                // take out the precision
                tempRatio = ( Ratio100x * amount /100 );
                temporaryRatio_global.push(tempRatio);
                sumTemporaryRatio += tempRatio;

                emit setWinnerPrinter (sumTemporaryRatio, tempRatio, amount, Ratio100x);
            }
        }
        else if(compareStringsbyBytes(winner, "c")){
            size = entityC.length;
            for (i = 0; i<entityC.length; i++) {
                // low as -2 digit
                Ratio100x = calculateYourReward(entityC[i].position);
                // more than 18 digits
                amount = entityC[i].amount;
                // take out the precision
                tempRatio = ( Ratio100x * amount /100 );
                temporaryRatio_global.push(tempRatio);
                sumTemporaryRatio += tempRatio;

                emit setWinnerPrinter (sumTemporaryRatio, tempRatio, amount, Ratio100x);
            }

            distributeToWinner(sumTemporaryRatio, temporaryRatio_global);
        }
    }

    function distributeToWinner( uint256 sumTemporaryRatio, uint256[] temporaryRatio ) public payable ownerOnly{
        uint256 reward;
        uint256 fund;
        uint i;
        //        require (msg.sender == owner);
        if(compareStringsbyBytes(winner, "a")){
            fund = totalFundB + totalFundC;
            for (i = 0; i<entityA.length; i++) {
                reward = ((temporaryRatio[i]*fund)/sumTemporaryRatio);
                transferEther(entityA[i].entityAddress, reward);
            }
        }
        else if(compareStringsbyBytes(winner, "b")){
            fund = totalFundA + totalFundC;
            for (i = 0; i<entityB.length; i++) {
                reward = ((temporaryRatio[i]*fund)/sumTemporaryRatio);
                transferEther(entityA[i].entityAddress, reward);
            }

        }
        else if(compareStringsbyBytes(winner, "c")){
            fund = totalFundA + totalFundB;
            for (i = 0; i<entityC.length; i++) {
                reward = ((temporaryRatio[i]*fund)/sumTemporaryRatio);
                transferEther(entityA[i].entityAddress, reward);
            }

        }

    }


    function kill() internal ownerOnly {
        selfdestruct(owner);
    }



// for test purposes
// Testing purpose only.
// @todo : should delete this before release
// Sets total fund amount
//    function testTotalFundSetter () public {
//        totalFundB = totalFundA/2;
//    }
//
//
//    event balanceCheck(uint256 balance);
//    function checkFundValue(address thisAddress){
//
//        emit balanceCheck(thisAddress.balance);
//
//    }
//    function adder (string betTo) public payable{
////        if (equal(betTo, "a")){
//        if (compareStringsbyBytes(betTo, "a")){
//
//            totalFundA = totalFundA + msg.value;
//
//        }else{
//
//            totalFundA = totalFundA + 77777777777;
//        }
//    }
//    event test_entity(address entityAddress, uint256 amount, string betTo, uint256 position);
//
//    function getEntityA () public {
//        for (uint i = 0; i<entityA.length; i++) {
//            emit test_entity(entityA[i].entityAddress, entityA[i].amount, entityA[i].betTo, entityA[i].position );
//        }
//    }
//
//    event fundValueEvent(uint256 fundA, uint256 fundB);
//
//    function getTotalFund () public {
//        emit fundValueEvent( totalFundA, totalFundB );
//    }
//
//
//
//    function test (uint256 amount) public {
//
//        entityA.push(EntityStruct(0x120Cf24523D9Ad268799be326818169c6f0737ba, amount, 'a', entityA.length))-1;
//        totalFundA += amount;
//        //        entityA.push(EntityStruct(0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c, 1286217770049595958, 'a', entityA.length))-1;
//
//    }

}
