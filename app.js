
const validUsers = {
    "xyz@gmail.com": "123",
    "abc@gmail.com": "abc",
    "uwu@gmail.com": "uwu"
};

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");


const loginBtn = document.querySelector(".clkbtn");

loginBtn.addEventListener("click", function(event) {
    
    event.preventDefault();

    
    const userEmail = emailInput.value;
    const userPassword = passwordInput.value;

    
    if (validUsers[userEmail] === userPassword) {
        
        window.location.href = "instructionpage.html";
    } else {
        
        alert("Invalid email or password");
    }
});