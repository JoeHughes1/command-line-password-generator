const { machine } = require('node:os');
const readline = require('node:readline');
const iconv = require('iconv-lite');
const ncp = require("copy-paste");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//1-ask user the password length
//2-ask user if they want symbols included
//generate password and copy it to the clipboard


rl.question("type anything", (test) => {
    ncp.copy(test, () => {
        console.log(`${test} copied to your clipboard`);
        rl.close();
    })
});
