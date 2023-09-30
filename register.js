// login system start here



// Register user


let username = document.querySelector('#username')
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerbtn = document.querySelector("#mybtnreg")
let msg = document.querySelector('.msg')
// regsiter user function
loadRegisterUser()


function loadRegisterUser() {

    registerbtn.addEventListener('click', registerUser)
}


function registerUser(e) {
    console.log(username.value)
    if (!username.value || !password.value || !email.value) {
        msg.innerHTML = '<p class="alert alert-danger">fill all required field</p>'

    } else {
        let user = username.value
        let pass = password.value
        let ema = email.value
        localStorage.setItem('username', JSON.stringify(user))
        localStorage.setItem('password', JSON.stringify(pass))
        localStorage.setItem('email', JSON.stringify(ema))
        alert('Successful register')

        location.href = 'index.html'
    }

    e.preventDefault()
}