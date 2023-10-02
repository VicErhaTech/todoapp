// get all the Ui to js
let form = document.querySelector("form")
let todoInput = document.querySelector("#todoinput")
let todoList = document.getElementById("listgroup")
let searchTodo = document.querySelector("#searchtodo")
let clearBtn = document.querySelector("#clearbtn")
let welcome = document.querySelector("#welcome")
let todayDate = document.querySelector("#date")
console.log(clearBtn)

// date
let fDate = () => {
    let today = new Date()
    todayDate.innerText = today
}
setInterval(fDate, 1000)

// logout
function logOut() {
    // localStorage.removeItem('email')
    // localStorage.removeItem('password')

    location.href = 'index.html'

}

//function to load all event listener

loadEventListeners()

document.addEventListener("DOMContentLoaded", getTodosFromLS)
//create load event lister functions
function loadEventListeners() {
    //submit event
    form.addEventListener('submit', addTodo)
    //delete todos
    todoList.addEventListener('click', removeTodo)
    //clear all todo
    clearBtn.addEventListener('click', clearTodos)
    //search todos
    searchTodo.addEventListener('keyup', filterTodo)


}

// check register user

let regUser = () => {
    let user = localStorage.getItem('username')
    user ? null : location.href = 'register.html'

}



function getTodosFromLS() {
    // Call the regUser function
    regUser();

    // Get username from local storage
    let username = localStorage.getItem('username');

    // Check if username exists
    if (username) {
        // Use innerText to set the welcome message
        let welcome = document.getElementById('welcome');
        welcome.innerText = username.toUpperCase();
    }

    let todos;

    // Check if todosLS exists in local storage
    if (localStorage.getItem('todosLS') === null) {
        todos = [];
    } else {
        // Parse todosLS into an array
        todos = JSON.parse(localStorage.getItem('todosLS'));
    }

    // You can now work with the 'todos' array
    // ...
}

    todos.forEach(function (todolocals) {

        //create li element
        let li = document.createElement('li')
        //add class to it
        li.className = "list-group-item"
        //create a textnode 
        let litodo = document.createTextNode(todolocals)
        //append textnode to li
        li.appendChild(litodo)

        //append li to ul
        todoList.appendChild(li)
        // create link item

        let link = document.createElement('a')
        //add class
        link.className = 'delete-item'
        link.style.cursor = "pointer"
        link.style.marginLeft = "60%"

        link.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        li.appendChild(link)


    })
}



//add todo

function addTodo(e) {

    if (todoInput.value === '') {
        alert('enter something')

    } else {
        //create li element
        let li = document.createElement('li')
        //add class to it
        li.className = "list-group-item"
        //create a textnode 
        let litodo = document.createTextNode(todoInput.value)
        //append textnode to li
        li.appendChild(litodo)

        //append li to ul
        todoList.appendChild(li)
        //store todo in to Local Storage
        storeTodosToLocalStorage(todoInput.value)

        // create link item

        let link = document.createElement('a')
        //add class
        link.className = 'delete-item'
        link.style.cursor = "pointer"
        link.style.marginLeft = "60%"

        link.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        li.appendChild(link)





        //empty the input
        todoInput.value = ''


        console.log(li)


    }


    e.preventDefault()
}
//remove todo

function removeTodo(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("are you sure you want to delete")) {
            e.target.parentElement.parentElement.remove()
            //delete from locals Storage
            removeFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}
//function to remove item from local storage

function removeFromLocalStorage(todoitemtoremove) {

    let todos
    //check local storage if empty
    if (localStorage.getItem('todosLS') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todosLS'))
    }
    //loop thru local storage
    todos.forEach(function (todoloop, index) {
        if (todoitemtoremove.textContent === todoloop) {
            todos.splice(index, 1)
        }

    })
    //set localstorage item
    localStorage.setItem('todosLS', JSON.stringify(todos))
}




//clear todos

function clearTodos() {
    // todoList.innerHTML = ''
    while (todoList.firstChild)
        todoList.removeChild(todoList.firstChild)

    // function to clear from local storage
    clearFromLS()

}

//clear from LS Function Implementation
function clearFromLS() {
    localStorage.clear()
}

//searchtodos

function filterTodo(e) {

    let search = e.target.value.toLowerCase()
    let listTodos = document.querySelectorAll(".list-group-item")

    listTodos.forEach(function (todo) {

        const todoContent = todo.firstChild.textContent
        if (todoContent.toLowerCase().indexOf(search) != -1) {
            todo.style.display = 'block'

        } else {
            todo.style.display = 'none'

        }

    })
}

//store todo to LS

function storeTodosToLocalStorage(todoin) {
    let todos
    if (localStorage.getItem('todosLS') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todosLS'))
    }
    todos.push(todoin)
    localStorage.setItem('todosLS', JSON.stringify(todos))

}  
// Function to save login details
function saveLoginDetails(email, password) {
    const loginDetails = { email, password };
    localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
  }
  
  // Function to get login details
  function getLoginDetails() {
    const storedDetails = localStorage.getItem('loginDetails');
    return storedDetails ? JSON.parse(storedDetails) : null;
  }
  
  // Example usage
  const loginButton = document.getElementById('loginButton'); // Assume you have a login button
  loginButton.addEventListener('click', () => {
    const email = document.getElementById('email').value; // Get email from input
    const password = document.getElementById('password').value; // Get password from input
  
    // Save login details
    saveLoginDetails(email, password);
  });
  
  // Example usage to retrieve and display saved login details
  const savedDetails = getLoginDetails();
  if (savedDetails) {
    console.log('Saved Email:', savedDetails.email);
    console.log('Saved Password:', savedDetails.password);
  }
  
  .vicerhalogo {
	height: 100px;
	width: 200px;
	justify-content: center;

  }