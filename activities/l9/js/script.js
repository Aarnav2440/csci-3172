function validate(){

    // Accessing the form input values via DOM elements and storing them in apt variables.
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //Creating required Regex patterns to test against input 
    const fnameRegex = /^[a-zA-Z]+$/;
    const lnameRegex = /^[a-zA-Z]+(['-][a-zA-Z]+)*$/;
    const emailRegex = /[\w-\.]+@([\w-]+\.)[\w]{2,6}/;
    const passwordRegexGeneral = /[a-zA-z0-9\W]{12,}/;
    const passwordRegexUpperCase = /[A-Z]+/;
    const passwordRegexLowerCase = /[a-z]+/;
    const passwordRegexDigit = /[0-9]+/;
    const passwordRegexSpecial = /[\W]+/;


    let flag = true;
    
    if(!fnameRegex.test(firstName)){
        flag = false;
    }
    if(!lnameRegex.test(lastName)){
        flag = false;
    }
    if(!emailRegex.test(email)){
        flag = false;
    }
    if(!passwordRegexGeneral.test(password) && !passwordRegexUpperCase.test(password) 
        && !passwordRegexDigit.test(password) && !passwordRegexLowerCase.test(password)
        && !passwordRegexSpecial.test(password) && (password.length < 12)){
        flag = false;
    }

    if(flag === true){
        alert("The form is successfully submitted");
    }
    else{
        alert("There are some errors in your form submission");
    }
}
  

 

