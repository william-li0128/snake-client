const connect = require("./client");
const {IP, PORT, NAME, MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, SLOGAN, EXIT_KEY} = require("./constants");

let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  conn = connect();
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //define the handleUserInput
  const handleUserInput = function(input) {
    if (input.toString() == EXIT_KEY) {
      process.exit(); // problem here: can't set ctrl+c as the exit keyword.
    }
    if (input.toString() == "q") {
      process.exit(); // problem here: can't set ctrl+c as the exit keyword.
    }
    if (input.toString() == MOVE_UP_KEY) {
      connection.write("Move: up");
    }
    if (input.toString() == MOVE_LEFT_KEY) {
      connection.write("Move: left");
    }
    if (input.toString() == MOVE_DOWN_KEY) {
      connection.write("Move: down");
    }
    if (input.toString() == MOVE_RIGHT_KEY) {
      connection.write("Move: right");
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;