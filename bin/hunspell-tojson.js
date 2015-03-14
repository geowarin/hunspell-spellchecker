#! /usr/bin/env node

var fs = require("fs");
var path = require("path");

var Spellchecker = require("../lib");

var input = path.resolve(process.cwd(), process.argv[2]);
var sp = new Spellchecker();

var DICT = sp.parse({
    dic: fs.readFileSync(input+".dic", { encoding: "utf8" }),
    aff: fs.readFileSync(input+".aff", { encoding: "utf8" })
});

fs.writeFileSync(input+".json", JSON.stringify(DICT));

console.log("Dicitonary written in ", input+".json");

