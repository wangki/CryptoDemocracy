// Import the page's CSS. Webpack will know what to do with it.


// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'


// Import our contract artifacts and turn them into usable abstractions.
// import betvote_artifacts from '../../build/contracts/Betvote.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
// const Betvote = contract(betvote_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
let accounts;
let account;



//---------------------------

let betvoteContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"betTo","type":"string"}],"name":"getBet","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"entityB","outputs":[{"name":"entityAddress","type":"address"},{"name":"amount","type":"uint256"},{"name":"betTo","type":"string"},{"name":"position","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"entityA","outputs":[{"name":"entityAddress","type":"address"},{"name":"amount","type":"uint256"},{"name":"betTo","type":"string"},{"name":"position","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalFundB","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalFundC","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_a","type":"string"},{"name":"_b","type":"string"}],"name":"compare","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"temporaryRatio_global","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalFundA","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"sqrt","outputs":[{"name":"y","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"entityC","outputs":[{"name":"entityAddress","type":"address"},{"name":"amount","type":"uint256"},{"name":"betTo","type":"string"},{"name":"position","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sumTemporaryRatio","type":"uint256"},{"name":"temporaryRatio","type":"uint256[]"}],"name":"distributeToWinner","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_winner","type":"string"}],"name":"setWinner","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"s1","type":"string"},{"name":"s2","type":"string"}],"name":"compareStringsbyBytes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"winner","type":"string"}],"name":"winnerAnnounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_betTo","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"newBet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sumTemporaryRatio","type":"uint256"},{"indexed":false,"name":"tempRatio","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"Ratio100x","type":"uint256"}],"name":"setWinnerPrinter","type":"event"}]);
// let betvote = betvoteContract.new(
//     {
//         from: web3.eth.accounts[0],
//         data: '0x608060405234801561001057600080fd5b5033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061238e806100616000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305b1137b146100d5578063078d160014610115578063148e4486146101715780632311ccba1461025857806338e80aa91461033f578063395b51681461036a5780633a96fdd7146103955780634b935f6c146104585780634f253f6614610499578063677342ce146104c4578063742bf02714610505578063c2ff0482146105ec578063c35dee341461064f578063e9a734ff146106ab575b600080fd5b610113600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610772565b005b61016f600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506107bd565b005b34801561017d57600080fd5b5061019c60048036038101908080359060200190929190505050610f72565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561021a5780820151818401526020810190506101ff565b50505050905090810190601f1680156102475780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b34801561026457600080fd5b5061028360048036038101908080359060200190929190505050611069565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156103015780820151818401526020810190506102e6565b50505050905090810190601f16801561032e5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b34801561034b57600080fd5b50610354611160565b6040518082815260200191505060405180910390f35b34801561037657600080fd5b5061037f611166565b6040518082815260200191505060405180910390f35b3480156103a157600080fd5b50610442600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061116c565b6040518082815260200191505060405180910390f35b34801561046457600080fd5b5061048360048036038101908080359060200190929190505050611423565b6040518082815260200191505060405180910390f35b3480156104a557600080fd5b506104ae611446565b6040518082815260200191505060405180910390f35b3480156104d057600080fd5b506104ef6004803603810190808035906020019092919050505061144c565b6040518082815260200191505060405180910390f35b34801561051157600080fd5b5061053060048036038101908080359060200190929190505050611497565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156105ae578082015181840152602081019050610593565b50505050905090810190601f1680156105db5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b61064d600480360381019080803590602001909291908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919291929050505061158e565b005b6106a9600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611a68565b005b3480156106b757600080fd5b50610758600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050612104565b604051808215151515815260200191505060405180910390f35b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156107b8573d6000803e3d6000fd5b505050565b6107c56121fe565b6000806000341115156107d757600080fd5b339150610819846040805190810160405280600181526020017f6100000000000000000000000000000000000000000000000000000000000000815250612104565b15610a5d5781836000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505083836040018190525034836020018181525050600160008054905001836060018181525050346005540160058190555060016000849080600181540180825580915050906001820390600052602060002090600402016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201908051906020019061092392919061223d565b50606082015181600301555050505061095e600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1634610772565b7fd006c5939a3d75ac710279c83a3632ef42cb33a853af1d0775410cb693e95cd6600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168534604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610a1c578082015181840152602081019050610a01565b50505050905090810190601f168015610a495780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1610f6c565b610a9c846040805190810160405280600181526020017f6200000000000000000000000000000000000000000000000000000000000000815250612104565b15610ce65734905081836000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505083836040018190525080836020018181525050600180805490500183606001818152505080600660008282540192505081905550600180849080600181540180825580915050906001820390600052602060002090600402016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002019080519060200190610bac92919061223d565b506060820151816003015550505050610be7600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1634610772565b7fd006c5939a3d75ac710279c83a3632ef42cb33a853af1d0775410cb693e95cd6600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168534604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610ca5578082015181840152602081019050610c8a565b50505050905090810190601f168015610cd25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1610f6b565b610d25846040805190810160405280600181526020017f6300000000000000000000000000000000000000000000000000000000000000815250612104565b15610f6a5781836000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050838360400181905250348360200181815250506001600280549050018360600181815250503460076000828254019250508190555060016002849080600181540180825580915050906001820390600052602060002090600402016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002019080519060200190610e3492919061223d565b506060820151816003015550505050610e6f600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1634610772565b7fd006c5939a3d75ac710279c83a3632ef42cb33a853af1d0775410cb693e95cd6600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168534604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b83811015610f2d578082015181840152602081019050610f12565b50505050905090810190601f168015610f5a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a15b5b5b50505050565b600181815481101515610f8157fe5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110595780601f1061102e57610100808354040283529160200191611059565b820191906000526020600020905b81548152906001019060200180831161103c57829003601f168201915b5050505050908060030154905084565b60008181548110151561107857fe5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111505780601f1061112557610100808354040283529160200191611150565b820191906000526020600020905b81548152906001019060200180831161113357829003601f168201915b5050505050908060030154905084565b60065481565b60075481565b600060608060008086935085925083519150818351101561118c57825191505b600090505b818110156113cf5782818151811015156111a757fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916848281518110151561122257fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191610156112bd577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9450611419565b82818151811015156112cb57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916848281518110151561134657fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191611156113c25760019450611419565b8080600101915050611191565b825184511015611401577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9450611419565b8251845111156114145760019450611419565b600094505b5050505092915050565b60098181548110151561143257fe5b906000526020600020016000915090505481565b60055481565b60008060026001840181151561145e57fe5b0490508291505b8181101561149157809150600281828581151561147e57fe5b040181151561148957fe5b049050611465565b50919050565b6002818154811015156114a657fe5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561157e5780601f106115535761010080835404028352916020019161157e565b820191906000526020600020905b81548152906001019060200180831161156157829003601f168201915b5050505050908060030154905084565b6000806000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156115ef57600080fd5b6116c860048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116885780601f1061165d57610100808354040283529160200191611688565b820191906000526020600020905b81548152906001019060200180831161166b57829003601f168201915b50505050506040805190810160405280600181526020017f6100000000000000000000000000000000000000000000000000000000000000815250612104565b1561176b57600754600654019150600090505b60008054905081101561176657848285838151811015156116f857fe5b906020019060200201510281151561170c57fe5b04925061175960008281548110151561172157fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684610772565b80806001019150506116db565b611a61565b61184460048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118045780601f106117d957610100808354040283529160200191611804565b820191906000526020600020905b8154815290600101906020018083116117e757829003601f168201915b50505050506040805190810160405280600181526020017f6200000000000000000000000000000000000000000000000000000000000000815250612104565b156118e757600754600554019150600090505b6001805490508110156118e2578482858381518110151561187457fe5b906020019060200201510281151561188857fe5b0492506118d560008281548110151561189d57fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684610772565b8080600101915050611857565b611a60565b6119c060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119805780601f1061195557610100808354040283529160200191611980565b820191906000526020600020905b81548152906001019060200180831161196357829003601f168201915b50505050506040805190810160405280600181526020017f6300000000000000000000000000000000000000000000000000000000000000815250612104565b15611a5f57600654600554019150600090505b600280549050811015611a5e57848285838151811015156119f057fe5b9060200190602002015102811515611a0457fe5b049250611a51600082815481101515611a1957fe5b906000526020600020906004020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684610772565b80806001019150506119d3565b5b5b5b5050505050565b600080600080600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611acd57600080fd5b8660049080519060200190611ae39291906122bd565b5060009050611bc160048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b815780601f10611b5657610100808354040283529160200191611b81565b820191906000526020600020905b815481529060010190602001808311611b6457829003601f168201915b50505050506040805190810160405280600181526020017f6100000000000000000000000000000000000000000000000000000000000000815250612104565b15611cd1576000805490509150600090505b600080549050811015611ccc57611c09600082815481101515611bf257fe5b9060005260206000209060040201600301546121dd565b9450600081815481101515611c1a57fe5b90600052602060002090600402016001015493506064848602811515611c3c57fe5b049250600983908060018154018082558091505090600182039060005260206000200160009091929091909150555082860195507fd8e7339235546f864ad2a556e0d662441fcb0e9539c0a922ff1abeeb54a72187868486886040518085815260200184815260200183815260200182815260200194505050505060405180910390a18080600101915050611bd3565b6120fb565b611daa60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d6a5780601f10611d3f57610100808354040283529160200191611d6a565b820191906000526020600020905b815481529060010190602001808311611d4d57829003601f168201915b50505050506040805190810160405280600181526020017f6200000000000000000000000000000000000000000000000000000000000000815250612104565b15611eba576001805490509150600090505b600180549050811015611eb557611df2600182815481101515611ddb57fe5b9060005260206000209060040201600301546121dd565b9450600181815481101515611e0357fe5b90600052602060002090600402016001015493506064848602811515611e2557fe5b049250600983908060018154018082558091505090600182039060005260206000200160009091929091909150555082860195507fd8e7339235546f864ad2a556e0d662441fcb0e9539c0a922ff1abeeb54a72187868486886040518085815260200184815260200183815260200182815260200194505050505060405180910390a18080600101915050611dbc565b6120fa565b611f9360048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611f535780601f10611f2857610100808354040283529160200191611f53565b820191906000526020600020905b815481529060010190602001808311611f3657829003601f168201915b50505050506040805190810160405280600181526020017f6300000000000000000000000000000000000000000000000000000000000000815250612104565b156120f9576002805490509150600090505b60028054905081101561209e57611fdb600282815481101515611fc457fe5b9060005260206000209060040201600301546121dd565b9450600281815481101515611fec57fe5b9060005260206000209060040201600101549350606484860281151561200e57fe5b049250600983908060018154018082558091505090600182039060005260206000200160009091929091909150555082860195507fd8e7339235546f864ad2a556e0d662441fcb0e9539c0a922ff1abeeb54a72187868486886040518085815260200184815260200183815260200182815260200194505050505060405180910390a18080600101915050611fa5565b6120f88660098054806020026020016040519081016040528092919081815260200182805480156120ee57602002820191906000526020600020905b8154815260200190600101908083116120da575b505050505061158e565b5b5b5b50505050505050565b6000816040518082805190602001908083835b60208310151561213c5780518252602082019150602081019050602083039250612117565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916836040518082805190602001908083835b6020831015156121a3578051825260208201915060208101905060208303925061217e565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191614905092915050565b600060646121ea8361144c565b60018115156121f557fe5b04029050919050565b608060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160608152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061227e57805160ff19168380011785556122ac565b828001600101855582156122ac579182015b828111156122ab578251825591602001919060010190612290565b5b5090506122b9919061233d565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106122fe57805160ff191683800117855561232c565b8280016001018555821561232c579182015b8281111561232b578251825591602001919060010190612310565b5b509050612339919061233d565b5090565b61235f91905b8082111561235b576000816000905550600101612343565b5090565b905600a165627a7a72305820a7d284d0bf3f2fbf1359c29298d8fefa20c99305eee7a620fba8d1fbc8abdb710029',
//         gas: '4700000'
//     }, function (e, contract){
//         console.log(e, contract);
//         if (typeof contract.address !== 'undefined') {
//             console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//         }
//     })
let Betvote = betvoteContract.at('0xd85a587648e0f12e6603281e8022863266b80a8e');


//---------------------------



window.App = {
  start: function() {
    const self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    //  @todo : delete meta
    // MetaCoin.setProvider(web3.currentProvider);
    // Betvote.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("이더리움 계정을 불러오는 과정에서 오류가 발생했습니다.");
        return;
      }

      if (accs.length == 0) {
        alert("이더리움  계정을 불러올 수 없습니다. 메타메스크를 이용해 Rinkeby 네트워크에 접속해주세요. ");
        return;
      }

      accounts = accs;
      account = accounts[0];

    });
  },

  setStatus: function(message) {
    let status = document.getElementById("status");
    status.innerHTML = message;
  },

    //  @todo : delete meta

    // refreshBalance: function() {
    //   let self = this;
    //
    //   let meta;
    //   MetaCoin.deployed().then(function(instance) {
    //     meta = instance;
    //     return meta.getBalance.call(account, {from: account});
    //   }).then(function(value) {
    //     let balance_element = document.getElementById("balance");
    //     balance_element.innerHTML = value.valueOf();
    //   }).catch(function(e) {
    //     console.log(e);
    //     self.setStatus("Error getting balance; see log.");
    //   });
    // },
    // sendCoin: function() {
    //   let self = this;
    //
    //   let amount = parseInt(document.getElementById("amount").value);
    //   let receiver = document.getElementById("receiver").value;
    //
    //   this.setStatus("Initiating transaction... (please wait)");
    //
    //   let meta;
    //   MetaCoin.deployed().then(function(instance) {
    //     meta = instance;
    //     return meta.sendCoin(receiver, amount, {from: account});
    //   }).then(function() {
    //     self.setStatus("Transaction complete!");
    //     self.refreshBalance();
    //   }).catch(function(e) {
    //     console.log(e);
    //     self.setStatus("Error sending coin; see log.");
    //   });
    // },

    //  @todo : delete meta


    //  @todo : delete test

  //   fundSetterTest: function() {
  //   let self = this;
  //   this.setStatus("Initiating transaction... (please wait)");
  //   let betvote;
  //   Betvote.deployed().then(function(instance) {
  //     betvote = instance;
  //     console.log("fundSetter");
  //     return betvote.testTotalFundSetter({from:account});
  //   }).then(function() {
  //     console.log("done")
  //     self.setStatus("fund set");
  //   }).catch(function(e) {
  //     console.log(e);
  //     self.setStatus("see log.");
  //   })
  // },
  //   testBetvote: function(amount) {
  //   let self = this;
  //
  //   // let amount = parseInt(document.getElementById("amount").value);
  //   // let receiver = document.getElementById("receiver").value;
  //   // let amount = 1000000000000;
  //
  //   this.setStatus("Initiating transaction... (please wait)");
  //
  //   let betvote;
  //   Betvote.deployed().then(function(instance) {
  //     betvote = instance;
  //     console.log("testBetvote");
  //
  //     return betvote.test(amount, {from:account});
  //   }).then(function() {
  //     console.log("done")
  //     self.setStatus("you did it!");
  //   }).catch(function(e) {
  //     console.log(e);
  //     self.setStatus("see log.");
  //   })
  // },
    //  @todo : delete test





    //

    setWinner: function() {
    let self = this;

    // let amount = parseInt(document.getElementById("amount").value);
    // let receiver = document.getElementById("receiver").value;
    // let amount = 1000000000000;

    this.setStatus("Initiating transaction... (please wait)");

    // let betvote;
    let Winner;
    Winner = document.getElementById("winner").value;

      Betvote.setWinner(Winner, {
          from: account,
      }, function (err, result) {
          if(!err){
              console.log(result);
              self.setStatus("you did it!");
          }
          else{
              console.error(err);
              self.setStatus("see log.");
          }

      });


    //   Betvote.deployed().then(function(instance) {
    //   betvote = instance;
    //   console.log("Set winner");
    //
    //   return betvote.setWinner(Winner, {from:account});
    // }).then(function(res) {
    //     console.log("done");
    //     res.logs.map((elem) =>{
    //         // setWinnerPrinter (sumTemporaryRatio, tempRatio, amount, Ratio100x)
    //         console.log("sumTemporaryRatio");
    //         console.log(elem.args.sumTemporaryRatio.toNumber());
    //         console.log("Ratio100x");
    //         console.log(elem.args.Ratio100x.toNumber());
    //         console.log("tempRatio");
    //         console.log(elem.args.tempRatio.toNumber());
    //         console.log("amount");
    //         console.log(elem.args.amount.toNumber());
    //
    //     });
    //
    //
    //
    //
    //     self.setStatus("you did it!");
    //   // self.setStatus("Transaction complete!");
    //   // self.refreshBalance();
    // }).catch(function(e) {
    //   console.log(e);
    //   self.setStatus("see log.");
    // })
  },

    getFundValue: function() {
    let self = this;

    this.setStatus("Initiating transaction... (please wait)");

    Betvote.getTotalFund({
        from: account,
        value: betAmount
    }, function (err, result) {
        if(!err){
            console.log(result);
            self.setStatus("Fund value is here");

        }else{
            console.error(err);
            self.setStatus("see log.");
          }

    });



    //     Betvote.deployed().then(function(instance) {
    //   betvote = instance;
    //   console.log("get Fund value");
    //   return betvote.getTotalFund({from:account});
    // }).then(function(res) {
    //   console.log("done");
    //   self.setStatus("Fund value is here");
    //   console.log(res);
    //   res.logs.map((elem) => {
    //     console.log(elem);
    //
    //     console.log(elem.args.fundA.toNumber());
    //     console.log(elem.args.fundB.toNumber());
    //   })
    //   // self.setStatus("Transaction complete!");
    //   // self.refreshBalance();
    // }).catch(function(e) {
    //   console.log(e);
    //   self.setStatus("see log.");
    // })
  },


  //   multipleA : function () {
  //   // let arr = [7429201028298496152, 4985397975494299188]
  //
  //   let arr =[6222291080324946738,
  //     8811591162013578891,
  //     2041370909651417086,
  //     5690031340033266931,
  //     3673287935062905729,
  //     2746026600679857374,
  //     4770140945095266273,
  //     4267117872848756981,
  //     611251012527098195,
  //     7046560913460675255,
  //     7141199541895941308,
  //     3312236073400729750,
  //     3696969240580934407,
  //     6195637844374544473,
  //     9211577375653122732,
  //     9799800400039738931,
  //     8884847768428236616,
  //     7921738839265398706,
  //     7470228612003006699,
  //     1425429817388118689,
  //     5342072356321565904,
  //     7440217132710476430,
  //     5158222779782376169,
  //     3372982222951452406,
  //     817853476616106331,
  //     8165741364708076363,
  //     5172388883644430267,
  //     8681261793697996553,
  //     7009115233945151842,
  //     8811524285769091979,
  //     5989866625453911894,
  //     1721472298531787355,
  //     6875355104743384151,
  //     4701316245054901048,
  //     5939820757209261265,
  //     5184834596398639699,
  //     5596915823012816621,
  //     876573239494070288,
  //     4080500873858826784,
  //     3860808144449670293]
  //
  //   arr.map(function (elem) {
  //     this.testBetvote(elem)
  //     console.log('going in')
  //   }, this)
  //
  // },
  //   multipleB : function () {
  //   // let arr = [7429201028298496152, 4985397975494299188]
  //
  //   let arr = [6763354746415769789,
  //     1902265473979278345,
  //     4842276402061892715,
  //     8153393198441901773,
  //     7541816632508144902,
  //     6580382596939530921,
  //     6283936828065363734,
  //     6710392398773268136,
  //     6619863599818661477,
  //     3109248452039800000,
  //     2783782532760399800,
  //     1141735516748918901,
  //     9188735845082892875,
  //     6924839395553209016,
  //     3127257306925653223,
  //     8068399367736727874,
  //     6047461418964564071,
  //     3821038084138303901,
  //     2192233437212893681,
  //     3535061855468396629,
  //     8469454338728842574,
  //     770176179052836252,
  //     3107422621306802588,
  //     2913271234642965066,
  //     4223539204864626338,
  //     5771904725429212145,
  //     5948205652747943428,
  //     9939251128616099330,
  //     8775249489968746057,
  //     9258708585899087603,
  //     7811568141202539113,
  //     1081751175432171250,
  //     7721195633526696029,
  //     5455504114273415718,
  //     3388641200205556562,
  //     3545314078584282611,
  //     1998591037629525786,
  //     8394035869040869275,
  //     3888550884090326670,
  //     7368743032332306725]
  //
  //   arr.map(function (elem) {
  //     this.testBetvote(elem)
  //     console.log('going in')
  //   }, this)
  //
  // },
  //   multipleC : function () {
  //   // let arr = [7429201028298496152, 4985397975494299188]
  //   let arr = [ 2144381363272776548,
  //     9443040194340703029,
  //     4782920631256052827,
  //     1646260668196842954,
  //     2183061762301566435,
  //     8303765057975141498,
  //     3407704209032019024,
  //     6776637870364139004,
  //     3937394814704404501,
  //     6231949943118903135,
  //     4817358950760415626,
  //     672476943223252524,
  //     2369854632266222801,
  //     8996629170863723826,
  //     9956409715408410985,
  //     2812786296384863236,
  //     3522398480485221118,
  //     1776836679219518488,
  //     9453160769760173605,
  //     4984579195941967703,
  //     6910385612297720015,
  //     6560354161338879208,
  //     5138037554652306575,
  //     3687437550718854110,
  //     7947109353144324134,
  //     2297886950098704066,
  //     1587113342784939496,
  //     3576373447762901691,
  //     1237314299042088098,
  //     1297702169261414098,
  //     6299432216773366334,
  //     5542265190184102460,
  //     8939518518317067625,
  //     4625462738386244844,
  //     7214947459044704595,
  //     1197250784754040571,
  //     2616028770475172001,
  //     6949593587660129277,
  //     4375485697662783141,
  //     8305952038411702545]
  //
  //   arr.map(function (elem) {
  //     this.testBetvote(elem)
  //     console.log('going in')
  //   }, this)
  //
  // },

    getEntityA: function() {
    let self = this;

    // let amount = parseInt(document.getElementById("amount").value);
    // let receiver = document.getElementById("receiver").value;

    this.setStatus("Initiating transaction... (please wait)");


      Betvote.getEntityA({
          from: account,
      }, function (err, result) {
          if(!err){
              console.log(result);
              self.setStatus("Event results are there, You Rock man!");
          }
          else{
              console.error(err);
              self.setStatus("you got to fix this");
          }
      });

        // let betvote;
    // Betvote.deployed().then(function(instance) {
    //   betvote = instance;
    //   return betvote.getEntityA({from:account});
    //   // return betvote.sendCoin(receiver, amount, {from: account});
    // }).then(function(res) {
    //   console.log("done")
    //   self.setStatus("Event results are there, You Rock man!");
    //   res.logs.map(function (elem) {
    //     console.log(elem.event)
    //     console.log(elem.args.entityAddress)
    //     console.log(elem.args.amount.toNumber())
    //     console.log(elem.args.betTo)
    //     console.log(elem.args.position.toNumber())
    //   },this)

      // console.log(res.logs[0])
      // console.log(res.logs[0].event)
      // console.log(res.logs[0].args.entityAddress)
      // console.log(res.logs[0].args.amount.toNumber())
      // console.log(res.logs[0].args.betTo)
      // console.log(res.logs[0].args.position.toNumber())

      // self.setStatus("Transaction complete!");

// watch for changes
      // self.refreshBalance();
    // }).catch(function(e) {
    //   console.log(e);
    //   self.setStatus("you got to fix this");
    //   ;
    // })

  },

    getBet: function(betTo) {
        let self = this;
        let betAmount;

        // let amount = parseInt(document.getElementById("amount").value);
        // let receiver = document.getElementById("receiver").value;

        this.setStatus("Initiating transaction... (please wait)");


        // turn into number and wei
        // betAmount = (document.getElementById("betAmount").value);

        betAmount = Math.pow(10,18)*(document.getElementById("betAmount"+betTo).value);
        console.log(betAmount);

        let betvote;
        // let betString = "getBet(" + betTo +','+ betAmount+  ")";
        // console.log(betString);

        // 0xD85a587648E0F12E6603281e8022863266b80a8e.call(bytes4(sha3("getBet( )")),parameters_values)
        // 0xD85a587648E0F12E6603281e8022863266b80a8e.call(bytes4(sha3(betString)),parameters_values)


        // token.transfer["address,uint256,bytes"](address, initialBalance, data, { from: fromAddr });

        // Betvote.getBet["string,uint256,bytes"](betTo, betAmount, {

        Betvote.getBet(betTo, {
          from: account,
          value: betAmount
        }, function (err, result) {
            if(!err){
                console.log(result);
                self.setStatus("betting complete");
            }
            else{
                console.error(err);
                self.setStatus("bet fail. ");
            }

        });


        // Betvote.getBet.call(betTo,betAmount,{
        //   from : account,
        //   value : betAmount
        // }).then(function (res) {
        //   console.log(res)
        // })

        // @todo:uncomment
        // Betvote.deployed().then(function(instance) {
        //     betvote = instance;
        //     console.log("betvote get bet")
        //     // return betvote.getBet(betTo, {from:account}).send({
        //     // return betvote.getBet(betTo, {from:account}).send({
        //
        //     // betvote.get(betTo)
        //     // return betvote.getBet(betTo, betAmount, {
        //     return betvote.getBet(betTo, betAmount, {
        //         from : account,
        //         value : betAmount
        //     })
        // }).then(function(res) {
        //     console.log("betting done");
        //     self.setStatus("betting complete");
        //     console.log("0");
        //     console.log(res);
        //     res.logs.map((elem) => {
        //         // event newBet(address _to, string _betTo, uint256 amount);
        //         console.log(elem.args._to);
        //         console.log(elem.args._betTo);
        //         console.log(elem.args.amount.toNumber());
        //     })
        //
        // }).catch(function(e) {
        //     console.log(e);
        //     self.setStatus("bet fail. ");
        // })

    },
    // balanceCheck: function() {
    //     let self = this;
    //     let balanceAddress;
    //
    //     this.setStatus("Initiating transaction... (please wait)");
    //
    //
    //     balanceAddress = document.getElementById("balanceCheck").value;
    //     let betvote;
    //     Betvote.deployed().then(function(instance) {
    //         betvote = instance;
    //         return betvote.checkFundValue(balanceAddress, {
    //             from : account,
    //         })
    //     }).then(function(res) {
    //         console.log("result")
    //         self.setStatus("betting complete");
    //         res.logs.map((elem) => {
    //             // console.log(elem.args.balance)
    //             // @todo: this!
    //             console.log(elem.args.balance.toNumber())
    //         })
    //
    //
    //     }).catch(function(e) {
    //         console.log(e);
    //         self.setStatus("fail. man");
    //     })
    //
    // },
    // closeModal: function() {
    //   console.log("MODAL CLOSED")
    //
    // }


}




window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
  }

  App.start();
});
