const cp = require('child_process');

const ps = cp.spawn('ps', ['ax']);

ps.on('error', err => {
  console.error(`${err.stack}`);
})

ps.stdout.on('data', data => {
  console.log(`Data: ${data}`);
})

ps.stderr.on('data', data => {
  console.log(`STDERR: ${data}`);
})

ps.on('close', code => {
  console.log(`Exit: ${code}`);
})