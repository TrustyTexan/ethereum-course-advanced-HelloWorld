const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(HelloWorld).then(instance => {
    instance.setMessage('Hello David', { value: 1000000, from: accounts[0] }).then(() => {
      console.log('Success');
    }).catch(e => {
      console.log(`Error : ${e}`);
    });
  }).catch(e => {
    console.log(`Deploy failed : ${e}`);
  });;
};
