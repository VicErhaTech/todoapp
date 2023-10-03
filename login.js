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
        msg.innerHTML = '<p class="alert alert-danger"> fill all required field </p>'
    } else {



        //comparing user info
        emailE === emailLS && passE === passLS ? location.href = 'todo.html' : msg.innerHTML = '<p class="alert alert-warning">username or password not correct</p>'
    }

    // Assume you're setting a welcome message when logged in
    var welcomeMessage = "Welcome Back";  // Replace this with the actual welcome message

    // Update the welcome message
    document.getElementById('welcome').innerText = welcomeMessage;

    // Display a message
    var msgElement = document.querySelector('.msg');
    msgElement.innerText = 'Login successful! Redirecting to the app page...';

    // Redirect to the app page (replace 'app.html' with the actual page you want to redirect to)
    window.location.href = 'todo.html';
}
