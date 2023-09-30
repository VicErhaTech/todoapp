let email = document.getElementById('lemail')
let password = document.getElementById('lpass')
let msg = document.querySelector('.msg')

function loginUser() {
    let emailE = email.value
    let passE = password.value
    let emailLS = JSON.parse(localStorage.getItem('email'))
    let passLS = JSON.parse(localStorage.getItem('password'))

    console.log(typeof emailE)
    console.log(emailE)
    console.log(typeof emailLS)
    console.log(emailLS + "LS")
    if (!emailE || !passE) {
        msg.innerHTML = '<p class="alert alert-danger">fill all required field</p>'
    } else {
        emailE === emailLS && passE === passLS ? location.href = 'todo.html' : msg.innerHTML = '<p class="alert alert-warning">username or password not correct</p>'
    }


}