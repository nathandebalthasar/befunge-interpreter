const fs = require('fs');
const befunge93 = require('befunge93');

if (process.argv.length < 3) {
    console.log("Usage: node befungeInterpreter.js <filename.bf>");
    process.exit(1);
}

const filename = process.argv[2];
const code = fs.readFileSync(filename, 'utf8');

befunge93(code, output => {
    console.log(output);
});
