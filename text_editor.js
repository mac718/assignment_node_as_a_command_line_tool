const fs = require('file-system');

process.stdin.resume();

process.stdin.setEncoding('utf8');

let inputRecord = '';

process.stdin.on('data', str => {
  str = str.trim();

  if (str === '\\q') {
    fs.access('data', fs.constants.F_OK, err => {
      if(err) {
        fs.mkdir('data', () => {})
        fs.writeFileSync('data/input.txt', inputRecord, err => {
          if (err) throw err;
        });
      } else {
        fs.writeFileSync('data/input.txt', inputRecord, err => {
          if (err) throw err;
        });
      }
      process.exit();
    });
  } else {
    console.log(str);
    inputRecord += `${str} `;
  };
});