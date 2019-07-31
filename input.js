let connection;
let { MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_UP_KEY } = require('./constants');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => handleUserInput(data, connection));
  return stdin;
};

const handleUserInput = function(command, conn) {
  if(command === '\u0003'){
    return process.exit();
  }

  switch(command){
    case "w":
      conn.write(MOVE_UP_KEY);
      break;
    case "a":
      conn.write(MOVE_LEFT_KEY);
      break;
    case "s":
      conn.write(MOVE_DOWN_KEY);
      break;
    case "d":
      conn.write(MOVE_RIGHT_KEY);
      break;
    case "e":
      conn.write("Say: Hello!");
      break;
    case "f":
      conn.write("Say: Bye!");
      break;
  }

  return command;
};

module.exports = { setupInput }