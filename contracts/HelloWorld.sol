pragma solidity 0.5.12;

contract HelloWorld {
  string message = "Hello World!";

  function getMessage() public view returns (string memory) {
    return message;
  }

  function setMessage(string memory newMessage) public payable {
    // require(msg.value >= 1000000 wei, 'Sender must pay at least 1000000 wei');
    message = newMessage;
  }
}