let connection;

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
      conn.write("Move: up");
      break;
    case "a":
      conn.write("Move: left");
      break;
    case "s":
      conn.write("Move: down");
      break;
    case "d":
      conn.write("Move: right");
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