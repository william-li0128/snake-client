const net = require("net");
const { setTimeout } = require("timers/promises");
const {IP, PORT, NAME, MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // tell clients they have successfully connected and send their name to game server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${NAME}`);
    conn.write("Say: go long!");
    conn.on("data", (data) => {
      console.log(data);
    });  
  });

  return conn;
};

module.exports = connect;