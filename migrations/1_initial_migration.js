const Migrations = artifacts.require("Migrations");
const mSS = artifacts.require("mSS");
const FSSAI = artifacts.require("FSSAI");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(mSS);
  deployer.deploy(FSSAI);
};
