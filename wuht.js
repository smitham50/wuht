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
const printif = require('./keywords/if');
const printelse = require('./keywords/else');
const printexport = require('./keywords/export');
const printextends = require('./keywords/extends');
const printfor = require('./keywords/for');
const printfunction = require('./keywords/function');
const printimport = require('./keywords/import');
const printin = require('./keywords/in');
const printinstanceof = require("./keywords/instanceof");
const printnew = require("./keywords/new");
const printreturn = require("./keywords/return");
const printsuper = require('./keywords/super');
const printthis = require('./keywords/this');
const printthrow = require('./keywords/throw');
const printtypeof = require('./keywords/typeof');
const printvar = require('./keywords/var');
const printvoid = require('./keywords/void');
const printwhile = require('./keywords/while');
const printwith = require('./keywords/with');
const printyield = require('./keywords/yield');
const printlet = require('./keywords/let');
const printawait = require('./keywords/await');
const printasync = require('./keywords/async');

try {
    eval(`print${process.argv[2]}`)();
} catch {
    console.log("The term you searched is not a reserved JavaScript keyword");
}
