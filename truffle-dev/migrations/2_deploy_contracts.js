var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Betvote = artifacts.require("./Betvote.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  deployer.link(ConvertLib, [MetaCoin, Betvote]);
  deployer.deploy(MetaCoin);
  deployer.deploy(Betvote);
};
