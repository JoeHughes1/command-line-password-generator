const { machine } = require('node:os');
const readline = require('node:readline');
const iconv = require('iconv-lite');
const ncp = require("copy-paste");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const lettersNumbers = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!@#$%&*_';


function askUser(){
    rl.question("Enter a password length: ", length =>{
        rl.question("Include special characters? y/n ", answer => {
            let specialCharacters = false;
            if(answer.toLowerCase() === 'y'){
                specialCharacters = true;
            } else if (answer.toLowerCase() === 'n'){
                specialCharacters = false;
            } else {
                throw new Error("Invalid input")
            }

            let res = generatePassword(length, specialCharacters);
            ncp.copy(res, () => {
                console.log("Generated password! It has been copied to your clipboard.");
                rl.close();
            })
        });
    });
}



function generatePassword(length, specialCharacters){
    let password = '';
    let availableChars = '';

    if(specialCharacters){
        availableChars = lettersNumbers + symbols;
    } else {
        availableChars = lettersNumbers;
    }

    for(let i = 1; i <= length; i++){
        password += randomCharacter(availableChars, availableChars.length);
    }

    return password;
}


function randomCharacter(string, max){
    min = 0;
    max = Math.floor(max);
    let randomInt = Math.floor(Math.random() * (max - min) + min);

    return string[randomInt];
}



askUser();
