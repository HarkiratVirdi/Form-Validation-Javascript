const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message)
{
    const formControl = input.parentElement;
    let small = formControl.querySelector('small');
    
    formControl.className = 'form-control error';
    small.innerHTML = message;
}

function showSuccess(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input)
{
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(re.test(input.value.trim()))
    {
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}

function checkRequired(inputArr)
{
    inputArr.forEach(elem => {
        if(elem.value.trim() === '')
        {
            showError(elem, `${getFieldName(elem)} is required`);
        }else{
            showSuccess(elem);
        }
    });
}

function getFieldName(input)
{
    return input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase();
}

function checkLength(input, min, max)
{
    let lengthy = input.value.length;
    if(lengthy > min && lengthy < max)
    {
        showSuccess(input);
    }else if(lengthy < min){
        showError(input, `${getFieldName(input.id)} must be at least ${min}`);
    }else{
        showError(input, `${getFieldName(input.id)} must be less of ${max}`);
    }
}



function checkPasswordsMatch(input1, input2)
{
    if(input1.value !== input2.value)
    {
        showError(input2, 'Passwords do not match');
    }
}

//event listener
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordsMatch(password, password2);
});


// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// function showError(input, message)
// {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }

// //show success outline

// function showSuccess(input)
// {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success'
// }


// function isValidEmail(email)
// {
//     const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     return re.test(String(email).toLowerCase());

// }


// //event listener
// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     if(username.value === '')
//     {
//       showError(username, 'Username is required');
//     }else{
//         showSuccess(username);
//     }

//     if(email.value === '')
//     {
//         showError(email, 'Email is required');

//     }else if(!isValidEmail(email.value))
//     {
//         showError(email, 'Email is not valid');
//     }else{
//         showSuccess(email);
//     }

//     if(password.value === '')
//     {
//         showError(password, 'Password is required');
//     }else{
//         showSuccess(password);
//     }

//     if(password2.value === '')
//     {
//         showError(password2, 'Password 2 is required');
//     }else{
//         showSuccess(password2);
//     }
// })



