'use strict';

const form = document.querySelector('.sign-up');
const formInput = document.querySelectorAll('.form-input');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');;
const submit = document.querySelector('.claim-button');
const errorArr = document.querySelectorAll('.error');
const errorIconArr = document.querySelectorAll('.error-icon');

// To reset the values when clicked the input box
fname.addEventListener('click',function(){
    fname.value = ' ';
    defaultValues();
});

lname.addEventListener('click',function(){
    lname.value = ' ';
    defaultValues();
});

email.addEventListener('click',function(){
    email.value = ' ';
    defaultValues();
});

password.addEventListener('click',function(){
    password.value =  ' ';
    defaultValues();
});

//To reset the error icon and error message 
const defaultValues = function(){
    for(let i = 0; i< errorIconArr.length;i++){
    errorIconArr[i].style.opacity = 0;
    errorArr[i].style.opacity = 0;
    }
    // fname.value = '';
    // lname.value = '';
    // email.value = '';
    // password.value='';
};

//Validate Name - First name, Last name
const validateName = function(name,type){
    console.log(`name:${name} type:${type}`);
    let err = type === 'First' ? 0 : 1 ;

    if(!name){
        errorDisplay(`${type} name cannot be empty`,err);
    }else{
        console.log('name:'+name);
        const nameRegex = /^[a-z]*$/ig;
        const result = nameRegex.test(name);
        console.log(result,name);
        if (!result) errorDisplay(`Invalid ${type} name`,err);    
        return result;
    }    
}

//Validate email address
const validateEmail = function(emailID){
    console.log(emailID);
    if(!emailID){
        errorDisplay(`Email address cannot be empty`,2);
    }else {
        console.log(`Email: ${emailID}`);
        const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
/*
The first part of the email Id can contain
1. Uppercase and lowercase letters (A-Z and a-z)
2. Numeric characters (0-9)
3. Special characters - ! # $ % & ' * + - / = ? ^ _ ` { | } ~

The second part of the email Id can contain
1. Letters
2. Digits
3. Hyphens
4. Dots

*/
        const result = emailRegex.test(emailID);
        if(!result) errorDisplay(`Looks like this is not a valid email!`,2);
        console.log(result);
    }
}

//Validate Password
const validatePassword = function(password){
    console.log(password);
    if(!password){
        errorDisplay(`Password cannot be empty`,3);

    }else {
        console.log(`Password :  ${password}`);
        const pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z][A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //or
        /*
        const pwdRegex = /^(?=.*[\d])(?=.*[!@#$%^&*])(?=.*[\D])[\w!@#$%^&*]{6,16}$/; //short hand form
        
        1. Password should contain atleast one number, one alphabet, one special character
        2. Minimum number of characters should be 6 and maximum number of characters should be 16.
        
        */

        const result = pwdRegex.test(password);
        if(!result) {
            if(password.length < 6 || password.length > 16){
                errorDisplay(`Password should be minimum 6 characters and maximum 16 characters`,3);
            }else if (password.search(/[0-9]/) < 0){
                errorDisplay(`Password should contain atleast one numeric character`,3);
            }else if (password.search(/[a-z]/i) < 0){
                errorDisplay(`Password should contain atleast one alphabet`,3);
            }else if (password.search(/[!@#$%^&*]/) < 0){
                errorDisplay(`Password should contain atleast one special character`,3);
            }
        }
        console.log(password);
    }
}

//Displaying error message
const errorDisplay = function(message,err){
    errorIconArr[err].style.opacity = 1;
    errorArr[err].textContent=message;
    errorArr[err].style.opacity = 1;
    formInput[err].style.border = '1px solid hsl(0, 100%, 74%)';
}

//Event Listener for submit button
submit.addEventListener('click',function(){
    defaultValues();
    const firstName = fname.value;
    const lastName = lname.value;
    const emailAddress = email.value;
    const passwordValue = password.value;

    // To trim whitespace characters with Regex
    let wsRegex = /^\s+|\s+$/g; 

    let fnameVal = firstName.replace(wsRegex,""); 
    let lnameVal = lastName.replace(wsRegex,"");
    let emailVal = emailAddress.replace(wsRegex,"");
    let passwordVal = passwordValue.replace(wsRegex,"");

    validateName(fnameVal,'First');
    
    validateName(lnameVal,'Last');

    validateEmail(emailVal);

    validatePassword(passwordVal);
});

