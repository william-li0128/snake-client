const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // tell clients they have successfully connected and send their name to game server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Li");
  });

  // show message from the server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;