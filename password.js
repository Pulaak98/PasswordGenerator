const btn = document.querySelector(`button`);
const inputBox = document.querySelector(`input`);
const copyImage = document.querySelector(`.copy`);

const letterUp = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const letterDown = `abcdefghijklmnopqrstuvwxyz`;
const numbers = `1234567890`;
const symbols = `!@#$%^&*`;
let length = 12;
let allCharacter = letterUp + letterDown + numbers + symbols;


btn.addEventListener(`click`, () => {
    let password = ``;
    password += letterUp[Math.floor(Math.random() * letterUp.length)];
    password += letterDown[Math.floor(Math.random() * letterDown.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
        password += allCharacter[Math.floor(Math.random() * length)];
    }
    inputBox.value = password;

});
copyImage.addEventListener(`click`, Copy);

function Copy() {
    inputBox.select();
    document.execCommand(`copy`);
}