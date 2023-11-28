const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert("You must write a task!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        li.classList.add("checked");
    } 

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();




function login() {
    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate the login (this is a basic example, replace with proper authentication)
    if (username === 'tyler@example.com' && password === '1234') {
        // Hide login container
        document.getElementById('login-container').style.display = 'none';
        // Show To-Do list container
        document.getElementById('todo-container').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
    console.log("Hi")
}

function signUp() {
    let name = document.getElementById("nameField").value;
    let email = document.getElementById("username").value;
    let password = document.getElementById('password').value;

    // Replace the condition with your actual validation logic
    if (name === "Tyler" && email === "tyler@example.com" && password === "1234") {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('todo-container').style.display = 'block';
    } else {
        alert('Invalid name, email, or password');
    }

    
}

// Login JavaScript
let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signInBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    login();
}

signUpBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    signUp();
}

function consoleText() {
    console.log("Hi")
}