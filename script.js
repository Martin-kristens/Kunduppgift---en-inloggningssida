
localStorage.setItem("username", "Sara");
localStorage.setItem("losenord", "qwe123");


let userName = localStorage.getItem("username");
let losenOrd = localStorage.getItem("losenord");


localStorage.removeItem("username");
localStorage.removeItem("losenord");
localStorage.clear();

 
const correctUsername = "Sara";
const correctlosenOrd = "qwe123";

console.log(username);
console.log(losenord);


const inpusername = document.getElementById("inpusername.value");

const inplosenOrd = document.getElementById("inplosenord.value");




const blockOne = document.querySelector(".blockone");
const blockTwo = document.querySelector(".blocktwo");
const blockThree = document.querySelector(".blockthree");
const loginBtn = document.getElementById("btn");
const backToLogin = document.getElementById("backtologin");
const logoutBtn = document.getElementById("logoutBtn");
const userInput = document.getElementById("username");
const userLosenOrd = document.getElementById("losenord");




const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) ?? null;
const loggedInlosenord = JSON.parse(localStorage.getItem("loggedInlosenord")) ?? null;


const userIsLoggedIn = () => {
   
    blockOne.style.display = "none";
    blockTwo.style.display = "block";
   
    
};


if (loggedInUser && loggedInlosenord) {
    userIsLoggedIn();
}


const resetInput = () => {
    userInput.value = "";
    userLosenOrd.value = "";
};


loginBtn.addEventListener("click", e => {
    e.preventDefault();

    if (userInput.value === correctUsername && userLosenOrd.value === correctlosenOrd) {
        userIsLoggedIn();
        // Sätter bara ett objekt med användarens uppgifter
        const loggedInUser = {
            username: userInput.value
        }

        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    } else {

        blockOne.style.display = "none";
        blockThree.style.display = "flex";
    }
});

backToLogin.addEventListener("click", e => {
    e.preventDefault();
    resetInput();
    blockThree.style.display = "none";
    blockOne.style.display = "block";
});


logoutBtn.addEventListener("click", e => {
    e.preventDefault();
    resetInput();
    localStorage.removeItem("loggedInUser");
    blockTwo.style.display = "none";
    blockOne.style.display = "block";
});
