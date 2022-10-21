// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
    
  //define the handleUserInput
  const handleUserInput = function(input) {
    if (input.toString() == "z") {
      process.exit();
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