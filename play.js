const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => callback(data));
  return stdin;
};

const handleUserInput = function(command) {
  if(command === '\u0003'){
    return process.exit();
  }
  return command;
};

setupInput(handleUserInput);