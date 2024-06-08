// PASSWORD GENERATOR

function generatePassword(lenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%¨&*()_+-="

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (lenght <= 0){
        return `(Password lenght must be at least 1)`;
    }

    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`
    }

    for (let i = 0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols)
console.log(`Generated password: ${password}`);