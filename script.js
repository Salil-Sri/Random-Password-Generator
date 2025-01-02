const passwordBox = document.getElementById('Password');
const btn = document.querySelector(".btn");
const copy = document.querySelector('.copy');
const length = 12;
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = "0123456789";
const special = "#@%&*$!";
const allChar = UpperCase + LowerCase + special + number;

function generatePassword(){
    let password = "";
    password +=  UpperCase[ Math.floor(Math.random() * UpperCase.length)];
    password +=  LowerCase[ Math.floor(Math.random() * LowerCase.length)];
    password +=  number[ Math.floor(Math.random() * number.length)];
    password +=  special[ Math.floor(Math.random() * special.length)];

    while( password.length < length ){
       password +=allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}
btn.addEventListener('click',function(){
    generatePassword();
})

function copyPass(){
   
    passwordBox.select();
    document.execCommand('copy');
    passwordBox.blur();
    alert("Copied! Try Another")
}
copy.addEventListener('click',()=>{
    copyPass();
})

