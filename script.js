/*sparar data till local storage*/
localStorage.setItem("username", "Sara");
localStorage.setItem("losenord", "qwe123");

/*läser data från local storage*/
let userName = localStorage.getItem("username");
let losenOrd = localStorage.getItem("losenord");

/*tar bort data från lokal storage*/
localStorage.removeItem("username");
localStorage.removeItem("losenord");
localStorage.clear();

/*Användarnamn och lösenord satt konstanta */ 
const correctUsername = "Sara";
const correctlosenOrd = "qwe123";

console.log(username);
console.log(losenord);


const inpusername = document.getElementById("inpusername.value");

const inplosenOrd = document.getElementById("inplosenord.value");

//const btnInsert = document.getElementById("btnInsert.value");

//const lsOutput = document.getElementById("lsOutput.value");

// På dem här raderna så hämtar du in dina element som finns i HTML-filen. 
// Jämför namnen som stor inom "" här med dem som finns som id eller class i HTML, så ser du vilka element som är vilka
const blockOne = document.querySelector(".blockone");
const blockTwo = document.querySelector(".blocktwo");
const blockThree = document.querySelector(".blockthree");
const loginBtn = document.getElementById("btn");
const backToLogin = document.getElementById("backtologin");
const logoutBtn = document.getElementById("logoutBtn");
const userInput = document.getElementById("username");
const userLosenOrd = document.getElementById("losenord");



// Här kollar du om det finns något i localstorage när du laddar om
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) ?? null;
const loggedInlosenord = JSON.parse(localStorage.getItem("loggedInlosenord")) ?? null;

// Funktion som kan användas för när man antingen är inloggad och laddar om eller loggar in
const userIsLoggedIn = () => {
    // Kolla variabelnamnet så ser du hur du kan manipulera DOMen genom att gömma element
    blockOne.style.display = "none";
    blockTwo.style.display = "block";
    // Testa denna rader och kommentera ut dem två raderna ovanför för att se hur det funkar
    //blockOne.style.backgroundColor = "tomato";
};


// Om det finns något i localStorage så visar vi inte loginsidan
if (loggedInUser && loggedInlosenord) {
    userIsLoggedIn();
}

// Rensar inputen när du loggar in eller går tillbaka
const resetInput = () => {
    userInput.value = "";
    userLosenOrd.value = "";
};


// Klicket för login knappen, e.prevent för att sidan inte ska laddas om när man trycker på knappen
loginBtn.addEventListener("click", e => {
    e.preventDefault();
    // Här kollar du om det användaren har skrivit in stämmer med det korrekta användarnamnet
    if (userInput.value === correctUsername && userLosenOrd.value === correctlosenOrd) {
        userIsLoggedIn();
        // Sätter bara ett objekt med användarens uppgifter
        const loggedInUser = {
            username: userInput.value
        }

        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    } else {
        // Här visar vi fel inloggningssidan och gömmer login sidan
        blockOne.style.display = "none";
        blockThree.style.display = "flex";
    }
});

// Klick för att prova logga in igen
backToLogin.addEventListener("click", e => {
    e.preventDefault();
    resetInput();
    blockThree.style.display = "none";
    blockOne.style.display = "block";
});

// Klick för att logga ut. Tömmer localstorage så att man kommer till loginsidan om man laddar om
logoutBtn.addEventListener("click", e => {
    e.preventDefault();
    resetInput();
    localStorage.removeItem("loggedInUser");
    blockTwo.style.display = "none";
    blockOne.style.display = "block";
});