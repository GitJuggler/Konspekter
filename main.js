let inputBar = document.querySelector("input");
let addBtn = document.querySelector(".add-btn");
let displayBar = document.querySelector(".display-bar");
let searchBtn = document.querySelector('.search-btn');

let randomNum = Math.floor(Math.random() * 10000000);

addBtn.onclick = () => {
  localStorage.setItem("message" + " " + randomNum, inputBar.value);
//   let a = alert(localStorage.getItem("message" + " " + randomNum));
  inputBar.value = "";
//   const monitoring = [a];
  displayBar.innerHTML = localStorage.getItem("message" + " " + randomNum);
};


searchBtn.onclick = () => {
    alert('Afsuski hozircha siz faqat konspekt qo\'sha olasiz!')
}