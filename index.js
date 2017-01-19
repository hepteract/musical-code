const midi = require("jsmidgen");
const fs = require("fs");

const render = require("./render.js");

let loc = process.argv[2]; // first argument is node, second is program
let data = fs.readFileSync(loc); // get a buffer containing data

fs.writeFileSync('out.mid', render(data).toBytes(), 'binary');
