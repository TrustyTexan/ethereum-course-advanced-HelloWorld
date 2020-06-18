const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", async () => {
  it('should initialize correctly', async () => {
    const instance = await HelloWorld.deployed();
    const message = await instance.getMessage();
    assert(message === 'Hello David');
  });

  it('should set the message correctly', async () => {
    const instance = await HelloWorld.deployed();
    await instance.setMessage('Testing Message');
    const message = await instance.getMessage();
    assert(message === 'Testing Message', 'Not the right message');
  });
});
