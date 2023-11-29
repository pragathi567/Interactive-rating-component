const subBtnEl = document.getElementById("subBtn");
const rateEl = document.getElementById("rate");
const mainContainer = document.querySelector(".main-container");
const containerThank = document.querySelector(".container-thank");
const rates = document.querySelectorAll(".btn");

subBtnEl.onclick = function(){
    containerThank.classList.remove("hidden");
    mainContainer.style.display = "none";
}

rates.forEach(rate =>{
    rate.addEventListener("click",()=>{
        rateEl.textContent = rate.innerHTML;
    })
})