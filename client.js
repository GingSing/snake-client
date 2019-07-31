const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.write("Name: GRY");
    //conn.write("Move: up");
    console.log(`Successfully connected to game server`);
  })

  conn.on('data', data => {
    console.log(data);
  })

  return conn;
}

module.exports = { connect };