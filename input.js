const connect = require("./client");
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
    if (input.toString() == "z") {
      process.exit();
    }
    if (input.toString() == "w") {
      connection.write("Move: up");
    }
    if (input.toString() == "a") {
      connection.write("Move: left");
    }
    if (input.toString() == "s") {
      connection.write("Move: down");
    }
    if (input.toString() == "d") {
      connection.write("Move: right");
    }
  };
  stdin.on("data", handleUserInput);

  // process.on("SIGINT", () => {
  //   console.log("Caught interrupt signal");
  //   process.exit();
  // })
  return stdin;
};

module.exports = setupInput;