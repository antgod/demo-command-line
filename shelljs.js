// node ./shelljs.js tom
var name = process.argv[2];
var shell = require("shelljs");

shell.exec("echo hello " + name);