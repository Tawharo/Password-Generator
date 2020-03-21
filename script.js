// generate password button clicked and starts the alerts to choose the password criteria
document.getElementById("try").addEventListener("click", function() {
// alerts & prompts to get password criteria
alert("Continue to set password criteria.");
var passwordUppercase = confirm("Pick at least ONE uppercase letter");
var passwordLowercase = confirm ("Pick at least ONE lowercase letter");
var passwordNumbers = confirm("Pick at least ONE number 1 through 9");
var passwordSpecial = confirm("Pick at least ONE special character")
var passwordLength = prompt("Pick password length between 8 and 100 characters");

var password = generate(passwordUppercase, passwordLowercase, passwordNumbers, passwordSpecial, passwordLength);

document.getElementById("display").value=password;
});

// generate random password
var generate = function(isUC, isLC, isNum, isSP, pwLen){

    let password = "";
    // lenght of password changed from string to number
    pwLen = parseInt(pwLen, 10);

    let values = "";
    let valuesUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let valuesLC = "abcdefghijklmnopqrstuvwxyz";
    let valuesNum = "1234567890";
    let valuesSP = "!@#$%&?";

    if (isUC){
        values = values + valuesUC;
    }
    if (isLC){
        values = values + valuesLC;
    }
    if (isNum){
        values = values + valuesNum;
    }
    if (isSP){
        values = values + valuesSP;
    }
    for(var i = 0; i < pwLen; i++){
        password = password + values.charAt(Math.floor(math.random() * Math.floor(values.length - 1)));
    }

    return password;
}