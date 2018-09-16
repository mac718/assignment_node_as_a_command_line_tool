var args = process.argv.slice(2);

var version = '1.0'
var help = "It's a calculator";

var operations = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },

  divide: (a, b) => {
    return a / b;
  }
}

if (args.includes('-v')) {
  console.log(version);
} else if (args.includes('-h')) {
  console.log(help); 
} else {
  let intitialOp = args[0];
  let total = operations[intitialOp](parseInt(args[1]), parseInt(args[2]));
  let remainingArgs = args.slice(3);
  remainingArgs.forEach(  (arg, i) => {
    if(i % 2 == 0) {
      total = operations[arg](total, parseInt(remainingArgs[i + 1]));
    }
  })
  console.log(total);
}
