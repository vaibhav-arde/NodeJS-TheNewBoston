let path = require("path");

var testFilePath = "E:/IntroToNodeJS//NodeJS-TheNewBoston/V12-test.txt";
var testFilePath1 = "E:\IntroToNodeJS\NodeJS-TheNewBoston\V12-test.txt";

console.log(`normalize ` + path.normalize(testFilePath));
console.log(`dirname ` + path.dirname(testFilePath));
console.log(`dirname ` + path.dirname(testFilePath1));
console.log(`basename ` + path.basename(testFilePath));
console.log(`basename ` + path.basename(testFilePath1));
console.log(`extname ` + path.extname(testFilePath));
console.log(`extname ` + path.extname(testFilePath1));