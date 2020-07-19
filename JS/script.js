// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }

//Register

function RegisterClick() {
  let Pass1 = document.getElementById("exampleInputPassword1").value;
  let Pass2 = document.getElementById("exampleInputPassword2").value;
  if (Pass1 !== Pass2 || (Pass1 == "" && Pass2 == "")) {
    alert("Check Your Password !");
  } else if (Pass1 == Pass2) {
    alert("Go to verify your email !");
  } else {
    alert("Check Your Informations !");
  }
}
//Videos !!!!!
let Videos = [
  "https://www.youtube.com/embed/ZjcJnrhbO4E",
  "https://www.youtube.com/embed/NGTSd5FDboU",
  "https://www.youtube.com/embed/EK4NLd9mKq4",
  "https://www.youtube.com/embed/ONWGp1nHqb8",
  "https://www.youtube.com/embed/3RuYwYgXRNQ",
  "https://www.youtube.com/embed/Hmq3K-GcMZU",
  "https://www.youtube.com/embed/XXwKCFIHyMg",
  "https://www.youtube.com/embed/qdwbK1Y7H0U",
  "https://www.youtube.com/embed/GeRE9RULtVQ",
  "https://www.youtube.com/embed/B06Ew2R6h2c",
  "https://www.youtube.com/embed/pnJ1dPTL684",
];
function ClickMe(number) {
  let box = document.getElementById("Teacherbox");
  box.style.height = "900px";
  let div = document.getElementById("divo");
  let frame = document.getElementById("frome");
  frame.src = Videos[number];
  div.style.display = "block";
}

// btn.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[0];
//   div.style.display = "block";
// });

// btn2.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[1];
//   div.style.display = "block";
// });

// btn3.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[2];
//   div.style.display = "block";
// });

// btn4.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[3];
//   div.style.display = "block";
// });

// btn5.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[4];
//   div.style.display = "block";
// });

// btn6.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[5];
//   div.style.display = "block";
// });

// btn7.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[6];
//   div.style.display = "block";
// });

// btn8.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[7];
//   div.style.display = "block";
// });

// btn9.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[8];
//   div.style.display = "block";
// });

// btn10.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[9];
//   div.style.display = "block";
// });
// btn11.addEventListener("click", function () {
//   let div = document.getElementById("divo");
//   let frame = document.getElementById("frome");
//   frame.src = Videos[10];
//   div.style.display = "block";
// });
