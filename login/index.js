const userName = document.getElementById('userName')
const passWord = document.getElementById('passWord')
const btn = document.getElementById('btn')
const message = document.getElementById('message')

btn.addEventListener('click', () => {
    const userNameValue = userName.value.trim();
    const passWordValue = passWord.value.trim();

    console.log('userName : ',userNameValue);
    console.log('passWord : ',passWordValue);

    if(userNameValue === 'ramanathan20032' && passWordValue === 'test@123'){
        message.textContent = 'Successfully Logged In.';
        message.style.color = 'green';
    }
    else{
        message.textContent = 'Invalid credentials.';
        message.style.color = 'red';
    }
})
