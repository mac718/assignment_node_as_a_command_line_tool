const cp = require('child_process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', str => {
  str = str.trim();

  if (str === 'q' || str ==='quit') {
    console.log('Bye!');
    process.exit();
  } else {
    var sp = cp.spawn('echo', [str]); 
    sp.stdout.on('data', data => {
      console.log(`${data}`);
    });
  }
}) 