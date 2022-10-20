//SECTION ----------- SELECTEURS--------------------------------
//document.querySelector("h4").style.background="yellow"

const baliseHTML = document.querySelector("h4");

//ANCHOR -------------- Click event--------------------------------
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");


questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked")
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.background = "red";

});

//FIXME ----------------------- Mouse Events----------------------

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
mousemove.style.left = e.pageX +"px";
mousemove.style.top = e.pageY +"px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(2) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal"
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//STUB ----------------------------KeyPress event -----------------

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
key.textContent = e.key;

if(e.key === "j") {
  keypressContainer.style.background = "pink";
} else if (e.key === "h") {
  keypressContainer.style.background = "teal";
} else{
  keypressContainer.style.background = "red";

}
});

//TODO ---------------------------Scroll Event ------------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else{
    nav.style.top = "-50px";
  }
});



//REVIEW ------------------------------- Form Events ------------- 

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select")
const form = document.querySelector("form");
let pseudo = "";
let language = "";


inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;

});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", () => {
  e.preventDefault();

  
  if (cgv.checked) {
  document.querySelector("form > div").innerHTML = `
  <h3>Pseudo : ${pseudo}</h3>
  <h4>Langage préféré : ${language}</h4>
  `;
  } else{
    alert("Veuillez accepter les CGV");
  }
})

//LINK - ------------------------ Load Event --------------------- 

window.addEventListener("load", () => {
  console.log("Document chargé  !!");
})

//SECTION --------------------------- ForEach-------------

//const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  })
});


//NOTE - -------------------------------------- addEventListener vs onclick ---------------------- 
document.body.onclick = function () {
  console.log("click 12");
}


console.log(navigator.userAgent);






































//FIXME

//REVIEW ---------------------------------------------------------

//SECTION

//TODO

//LINK

// STUB

//NOTE 

//ANCHOR 

//


//monLien1.style.background = "red";
 
 /* -----------SELECTEURS

 document.querySelector("h4").style.background="red"

const baliseHtml = document.querySelector("h4");

console.log(baliseHtml);

baliseHtml.style.background = "red";
*/

/*
const questionContainer = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn2");
const response = document.querySelector("p");

//----------------------------------------------------------------------------------//

questionContainer.addEventListener("click", () => {
	questionContainer.classList.toggle("question-clicked")
} );

btn1.addEventListener("click", () => {
	response.classList.add("show-response")
	response.style.background = "green";
})


btn2.addEventListener("click", () => {
	response.classList.add("show-response")
	response.style.background = "red";

})

*/





//------------------------------------------------------------



