//SECTION ------------------ Form Events ------------------------- 
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;

  console.log(pseudo);
});

select.addEventListener('input', (e) => {
  language = e.target.value;
});

form.addEventListener("submit", () => {
  e.preventDefault();
  
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>`;
  } else{
    alert("Veuillez accepter les CGV")
  }
});













































