const net = require('net');
const { IP, PORT, PLAYER_INITIALS } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.write(`Name: ${PLAYER_INITIALS}`);
    //conn.write("Move: up");
    console.log(`Successfully connected to game server`);
  })

  conn.on('data', data => {
    console.log(data);
  })

  return conn;
}

module.exports = { connect };