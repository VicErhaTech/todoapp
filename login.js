let email = document.getElementById('lemail')
let password = document.getElementById('lpassword')
let msg = document.querySelector('.msg')


function loginUser() {
    // email user enter
    let emailE = email.value
    let passE = password.value
    // get register user info from LocalStorage

    let emailLS = localStorage.getItem('email')
    let passLS = localStorage.getItem('password')

    // validating user input
    if (!emailE || !passE) {
        msg.innerHTML = '<p class="alert alert-danger">fill all required field</p>'
    } else {



        //comparing user info
        emailE === emailLS && passE === passLS ? location.href = 'todo.html' : msg.innerHTML = '<p class="alert alert-warning">username or password not correct</p>'
    }

}