const Migrations = artifacts.require("Migrations");
const FSSAI = artifacts.require("FSSAI");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
