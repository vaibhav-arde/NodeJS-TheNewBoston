let fs = require('fs');

fs.writeFileSync(`V12-test.txt`, `I love sweet-corns!!`);

console.log(fs.readFileSync(`V12-test.txt`).toString());