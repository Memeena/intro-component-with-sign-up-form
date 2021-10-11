# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](/https://github.com/Memeena/intro-component-with-sign-up-form/blob/f165671138368eda78404e973ce18ee27e737b2b/Screenshot-Desktop%20Frontend%20Mentor%20Intro%20component%20with%20sign%20up%20form.png)
![](/https://github.com/Memeena/intro-component-with-sign-up-form/blob/f165671138368eda78404e973ce18ee27e737b2b/Screenshot-Mpbile%20Frontend%20Mentor%20Intro%20component%20with%20sign%20up%20form.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla JS
- Regex for validation in JS

### What I learned

I learnt to use the following in this challenge.

1. Animations using keyframes. 
2. For the button, I have made it to move a little bit top when hovered.
3. To trim whitespace characters, instead of using trim(), have used Regex.
    
    let wsRegex = /^\s+|\s+$/g; // To trim whitespace characters with Regex

4. For validating names, used regex to validate the name for any special characters and numbers.
    
    const nameRegex = /^[a-z]*$/ig;

5. For validating email, used the following regex.
    
    const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    The first part of the email Id can contain
    1. Uppercase and lowercase letters (A-Z and a-z)
    2. Numeric characters (0-9)
    3. Special characters - ! # $ % & ' * + - / = ? ^ _ ` { | } ~

    The second part of the email Id can contain
    1. Letters
    2. Digits
    3. Hyphens
    4. Dots
6. For validating password, used the following regex.
    
    const pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z][A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //or

    const pwdRegex = /^(?=.*[\d])(?=.*[!@#$%^&*])(?=.*[\D])[\w!@#$%^&*]{6,16}$/; //short hand form
        
    1. Password should contain atleast one number, one alphabet, one special character
    2. Minimum number of characters should be 6 and maximum number of characters should be 16.

7. For Password, have thrown the error message based on the conditions prohibited.
    
    if(password.length < 6 || password.length > 16){
        errorDisplay(`Password should be minimum 6 characters and maximum 16 characters`,3);
    }else if (password.search(/[0-9]/) < 0){
        errorDisplay(`Password should contain atleast one numeric character`,3);
    }else if (password.search(/[a-z]/i) < 0){
        errorDisplay(`Password should contain atleast one alphabet`,3);
    }else if (password.search(/[!@#$%^&*]/) < 0){
        errorDisplay(`Password should contain atleast one special character`,3);
    }

## Author


- Frontend Mentor - [@meMeena](https://www.frontendmentor.io/profile/meMeena)


*
