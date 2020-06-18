pragma solidity 0.5.12;

contract HelloWorld {
  string message = "Hello World!";

  function getMessage() public view returns (string memory) {
    return message;
  }

  function setMessage(string memory newMessage) public payable {
    require(msg.value >= 1 ether, 'Sender must pay at least one ether');
    message = newMessage;
  }
}