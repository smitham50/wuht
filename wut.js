#!/usr/bin/env node

const printbreak = require('./keywords/break');
const printcase = require('./keywords/case');
const printswitch = require('./keywords/switch');
const printcatch = require('./keywords/catch');
const printtry = require('./keywords/try');
const printfinally = require('./keywords/finally');
const printclass = require('./keywords/class');
const printconst = require('./keywords/const');
const printcontinue = require('./keywords/continue');
const printdebugger = require('./keywords/debugger');
const printdefault = require('./keywords/default');
const printdelete = require('./keywords/delete');
const printdo = require('./keywords/do');

try {
    eval(`print${process.argv[2]}`)();
} catch {
    console.log("The term you searched is not a reserved JavaScript keyword");
}
