// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
// https://www.w3schools.com/charsets/ref_html_ascii.asp

const resultEl = document.getElementById('result');
const lenghtEl = document.getElementById('lenght');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if(!password) { return }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clopboard!');
})

generateEl.addEventListener('click', () => {
    const lenght = +lenghtEl.value; // Lo convertimos a númerico.
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lenght);
});

function generatePassword(lower, upper, number, symbol, lenght) {
    let generatePassword = '';
    const typesCount = lower + upper + number + symbol; // Obtener número de checkbox seleccionados.
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]) // { lower: true }... Filtramos por los que esten en true.
    
    if(typesCount === 0) {
        return '';
    }

    for(let index = 0; index < lenght; index += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]; // Obtenemos el nombre de la propiedad.
            generatePassword += randomFunc[funcName]();
        })
    }
    console.log(generatePassword);
    const finalPassword = generatePassword.slice(0, lenght);
    return finalPassword;
}

function getRandomLower() {
    // 97 = a en código ASCII.
    // 26 + 97 da 122 que es igual a z en código ASCII.
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    // 65 = A en código ASCII.
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    // 48 = 0 en código ASCII.
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

