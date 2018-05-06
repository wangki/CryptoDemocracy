// Import the page's CSS. Webpack will know what to do with it.


// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'


// Import our contract artifacts and turn them into usable abstractions.
import betvote_artifacts from '../../build/contracts/Betvote.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
const Betvote = contract(betvote_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
let accounts;
let account;



//---------------------------



//---------------------------



window.App = {
  start: function() {
    const self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    //  @todo : delete meta
    // MetaCoin.setProvider(web3.currentProvider);
    Betvote.setProvider(web3.currentProvider);

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

    fundSetterTest: function() {
    let self = this;
    this.setStatus("Initiating transaction... (please wait)");
    let betvote;
    Betvote.deployed().then(function(instance) {
      betvote = instance;
      console.log("fundSetter");
      return betvote.testTotalFundSetter({from:account});
    }).then(function() {
      console.log("done")
      self.setStatus("fund set");
    }).catch(function(e) {
      console.log(e);
      self.setStatus("see log.");
    })
  },
    testBetvote: function(amount) {
    let self = this;

    // let amount = parseInt(document.getElementById("amount").value);
    // let receiver = document.getElementById("receiver").value;
    // let amount = 1000000000000;

    this.setStatus("Initiating transaction... (please wait)");

    let betvote;
    Betvote.deployed().then(function(instance) {
      betvote = instance;
      console.log("testBetvote");

      return betvote.test(amount, {from:account});
    }).then(function() {
      console.log("done")
      self.setStatus("you did it!");
    }).catch(function(e) {
      console.log(e);
      self.setStatus("see log.");
    })
  },
    //  @todo : delete test


    setWinner: function() {
    let self = this;

    // let amount = parseInt(document.getElementById("amount").value);
    // let receiver = document.getElementById("receiver").value;
    // let amount = 1000000000000;

    this.setStatus("Initiating transaction... (please wait)");

    let betvote;
    let Winner;
    Betvote.deployed().then(function(instance) {
      betvote = instance;
      console.log("Set winner");
      Winner = document.getElementById("winner").value;

      return betvote.setWinner(Winner, {from:account});
    }).then(function(res) {
        console.log("done");
        res.logs.map((elem) =>{
            // setWinnerPrinter (sumTemporaryRatio, tempRatio, amount, Ratio100x)
            console.log("sumTemporaryRatio");
            console.log(elem.args.sumTemporaryRatio.toNumber());
            console.log("Ratio100x");
            console.log(elem.args.Ratio100x.toNumber());
            console.log("tempRatio");
            console.log(elem.args.tempRatio.toNumber());
            console.log("amount");
            console.log(elem.args.amount.toNumber());

        });




        self.setStatus("you did it!");
      // self.setStatus("Transaction complete!");
      // self.refreshBalance();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("see log.");
    })
  },

    getFundValue: function() {
    let self = this;

    this.setStatus("Initiating transaction... (please wait)");

    let betvote;
    let Winner;
    Betvote.deployed().then(function(instance) {
      betvote = instance;
      console.log("get Fund value");
      return betvote.getTotalFund({from:account});
    }).then(function(res) {
      console.log("done");
      self.setStatus("Fund value is here");
      console.log(res);
      res.logs.map((elem) => {
        console.log(elem);

        console.log(elem.args.fundA.toNumber());
        console.log(elem.args.fundB.toNumber());
      })
      // self.setStatus("Transaction complete!");
      // self.refreshBalance();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("see log.");
    })
  },


    multipleA : function () {
    // let arr = [7429201028298496152, 4985397975494299188]

    let arr =[6222291080324946738,
      8811591162013578891,
      2041370909651417086,
      5690031340033266931,
      3673287935062905729,
      2746026600679857374,
      4770140945095266273,
      4267117872848756981,
      611251012527098195,
      7046560913460675255,
      7141199541895941308,
      3312236073400729750,
      3696969240580934407,
      6195637844374544473,
      9211577375653122732,
      9799800400039738931,
      8884847768428236616,
      7921738839265398706,
      7470228612003006699,
      1425429817388118689,
      5342072356321565904,
      7440217132710476430,
      5158222779782376169,
      3372982222951452406,
      817853476616106331,
      8165741364708076363,
      5172388883644430267,
      8681261793697996553,
      7009115233945151842,
      8811524285769091979,
      5989866625453911894,
      1721472298531787355,
      6875355104743384151,
      4701316245054901048,
      5939820757209261265,
      5184834596398639699,
      5596915823012816621,
      876573239494070288,
      4080500873858826784,
      3860808144449670293]

    arr.map(function (elem) {
      this.testBetvote(elem)
      console.log('going in')
    }, this)

  },
    multipleB : function () {
    // let arr = [7429201028298496152, 4985397975494299188]

    let arr = [6763354746415769789,
      1902265473979278345,
      4842276402061892715,
      8153393198441901773,
      7541816632508144902,
      6580382596939530921,
      6283936828065363734,
      6710392398773268136,
      6619863599818661477,
      3109248452039800000,
      2783782532760399800,
      1141735516748918901,
      9188735845082892875,
      6924839395553209016,
      3127257306925653223,
      8068399367736727874,
      6047461418964564071,
      3821038084138303901,
      2192233437212893681,
      3535061855468396629,
      8469454338728842574,
      770176179052836252,
      3107422621306802588,
      2913271234642965066,
      4223539204864626338,
      5771904725429212145,
      5948205652747943428,
      9939251128616099330,
      8775249489968746057,
      9258708585899087603,
      7811568141202539113,
      1081751175432171250,
      7721195633526696029,
      5455504114273415718,
      3388641200205556562,
      3545314078584282611,
      1998591037629525786,
      8394035869040869275,
      3888550884090326670,
      7368743032332306725]

    arr.map(function (elem) {
      this.testBetvote(elem)
      console.log('going in')
    }, this)

  },
    multipleC : function () {
    // let arr = [7429201028298496152, 4985397975494299188]
    let arr = [ 2144381363272776548,
      9443040194340703029,
      4782920631256052827,
      1646260668196842954,
      2183061762301566435,
      8303765057975141498,
      3407704209032019024,
      6776637870364139004,
      3937394814704404501,
      6231949943118903135,
      4817358950760415626,
      672476943223252524,
      2369854632266222801,
      8996629170863723826,
      9956409715408410985,
      2812786296384863236,
      3522398480485221118,
      1776836679219518488,
      9453160769760173605,
      4984579195941967703,
      6910385612297720015,
      6560354161338879208,
      5138037554652306575,
      3687437550718854110,
      7947109353144324134,
      2297886950098704066,
      1587113342784939496,
      3576373447762901691,
      1237314299042088098,
      1297702169261414098,
      6299432216773366334,
      5542265190184102460,
      8939518518317067625,
      4625462738386244844,
      7214947459044704595,
      1197250784754040571,
      2616028770475172001,
      6949593587660129277,
      4375485697662783141,
      8305952038411702545]

    arr.map(function (elem) {
      this.testBetvote(elem)
      console.log('going in')
    }, this)

  },

    getEntityA: function() {
    let self = this;

    // let amount = parseInt(document.getElementById("amount").value);
    // let receiver = document.getElementById("receiver").value;

    this.setStatus("Initiating transaction... (please wait)");

    let betvote;
    Betvote.deployed().then(function(instance) {
      betvote = instance;
      return betvote.getEntityA({from:account});
      // return betvote.sendCoin(receiver, amount, {from: account});
    }).then(function(res) {
      console.log("done")
      self.setStatus("Event results are there, You Rock man!");
      res.logs.map(function (elem) {
        console.log(elem.event)
        console.log(elem.args.entityAddress)
        console.log(elem.args.amount.toNumber())
        console.log(elem.args.betTo)
        console.log(elem.args.position.toNumber())
      },this)

      // console.log(res.logs[0])
      // console.log(res.logs[0].event)
      // console.log(res.logs[0].args.entityAddress)
      // console.log(res.logs[0].args.amount.toNumber())
      // console.log(res.logs[0].args.betTo)
      // console.log(res.logs[0].args.position.toNumber())

      // self.setStatus("Transaction complete!");

// watch for changes
      // self.refreshBalance();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("you got to fix this");
      ;
    })

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
        let betString = "getBet(" + betTo +','+ betAmount+  ")";
        console.log(betString);

        // 0xD85a587648E0F12E6603281e8022863266b80a8e.call(bytes4(sha3("getBet( )")),parameters_values)
        0xD85a587648E0F12E6603281e8022863266b80a8e.call(bytes4(sha3(betString)),parameters_values)

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

        // }).catch(function(e) {
        //     console.log(e);
        //     self.setStatus("bet fail. ");
        // })

    },
    balanceCheck: function() {
        let self = this;
        let balanceAddress;

        this.setStatus("Initiating transaction... (please wait)");


        balanceAddress = document.getElementById("balanceCheck").value;
        let betvote;
        Betvote.deployed().then(function(instance) {
            betvote = instance;
            return betvote.checkFundValue(balanceAddress, {
                from : account,
            })
        }).then(function(res) {
            console.log("result")
            self.setStatus("betting complete");
            res.logs.map((elem) => {
                // console.log(elem.args.balance)
                // @todo: this!
                console.log(elem.args.balance.toNumber())
            })


        }).catch(function(e) {
            console.log(e);
            self.setStatus("fail. man");
        })

    },
    closeModal: function() {
      console.log("MODAL CLOSED")

    }


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
