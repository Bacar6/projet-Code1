const monButton1 = document.querySelector(".btn1");
const monButton2 = document.getElementById("btn2");

const monTitre = document.querySelector("h1");

monButton1.addEventListener('click', () => {
  monTitre.style.color = "green";
})

monButton2.addEventListener('click', () => {

  monTitre.classList.toggle("baliseH1")
})
























