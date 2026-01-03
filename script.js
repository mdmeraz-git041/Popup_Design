let popup = document.querySelector(".popup");
let submitBtn = document.getElementById("submit-btn");
let okBtn = document.getElementById("ok");
let user = document.getElementById("name");


let userName = prompt("Enter your name");
user.innerText = `Hii ! ${userName}`;

function openPopup() {
    
    popup.classList.add("open-popup");
    submitBtn.classList.add("hide-submitBtn");
    // submitBtn.style.display = "none";
}

submitBtn.addEventListener("click", openPopup);

function closePopup() {
    popup.classList.remove("open-popup");
    submitBtn.classList.remove("hide-submitBtn");
    // submitBtn.style.display = "inline-block";

}

okBtn.addEventListener("click", closePopup);

