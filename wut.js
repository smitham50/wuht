#!/usr/bin/env node

const printbreak = require('./keywords/break');
const printcase = require('./keywords/case');
const printswitch = require('./keywords/switch');

try {
    eval(`print${process.argv[2]}`)();
} catch {
    console.log("Keyword not found");
}
