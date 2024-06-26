const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

// recieving the event as a parameter to the function
form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    let success = true

    // username validation
    if(usernameVal === ''){
        success = false
        setError(username, 'Username is required')
    }
    else{
        setSuccess(username)
    }

    // email validation
    if(emailVal === ''){
        success = false
        setError(email, 'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false
        setError(email, 'Please enter a valid Email')
    }
    else{
        setSuccess(email)
    }

    // password validation
    if(passwordVal === ''){
        success = false
        setError(password, 'password is required')
    }
    else if(passwordVal.length < 8){
        success = false
        setError(password, 'password should be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    // cpassword validation
    if(cpasswordVal === ''){
        success = false
        setError(cpassword, 'confirm password is required')
    }
    else if(cpasswordVal !== passwordVal){
        success = false
        setError(cpassword, 'password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success
}

// element - password, msg - pwd is required
function setError(element, message){
    const inputGroup = element.parentElement; // class="input-group"
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;

    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

// element - password
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innertext = '';

    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email)=> {
    return String(email)
    .toLowerCase()
    .match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    )
 }