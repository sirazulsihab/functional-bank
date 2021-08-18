const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function (){
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    if(userEmail == 'baper@pola.com' && userPassword == '1234'){
        document.location.href = 'banking.html'
    }else{
        console.log('your are rohinga!')
    }
})