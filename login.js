const loginBox = document.querySelector("input");
const welcome = document.querySelector("span");
const loginform = document.querySelector("#loginform");
const logoutform = document.querySelector("#logoutform");
const hello = document.querySelector("#hello");
const logoutBtn = document.querySelector("#logoutBtn");




function login() {
    const userID = loginBox.value;
    localStorage.setItem("userID", userID)
}
function logout() {
    localStorage.removeItem("userID");
    localStorage.removeItem("todo")
}
function greeting(saveID) {
    welcome.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");
    logoutBtn.classList.add("Btn");
    welcome.innerText = `hello ${saveID}`
}

const saveID = localStorage.getItem("userID");
if (saveID === null) {
    loginform.classList.remove("hidden");
    loginform.classList.add("loingform");
} else { 
    greeting(saveID);
}
loginform.addEventListener("submit", login)
logoutBtn.addEventListener("click", logout)

hello.innerText= `${ (saveID === null) ? "Welcome!" : `Hello  ${saveID}`}`


