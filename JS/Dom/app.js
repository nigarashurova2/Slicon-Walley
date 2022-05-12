// let value;

// value =  document;

// value = document.scripts;
// value = document.links;

// // seçicilər
// let link = document.getElementById("Container");
// let input = document.getElementsByClassName("input");
// let elem = document.getElementsByTagName("a");
// let elem2 =document.getElementsByName("input");
// let a =  document.querySelector("#Container");
// let links = document.querySelectorAll(".list-group-item");

// // links.style.color = "red";
// links.forEach(link => {
//     link.style.color = "red";
//     console.log(link);
// });

// console.log(links);
// console.log(a);
// // console.log(elem);
// // console.log(elem2);
// console.log(link);

// // console.log(value);

let title = document.querySelector("#text1");
console.log(title);
title.classList = "btn-dark";
// title.className = "title";
title.id = "title1";
title.href = "http://google.com";
title.name = "title1";

let button = document.createElement("button");
console.log(button);

button.classList = "btn btn-danger";
button.id = "button";
button.name = "btn";
// button.textContent = "<a>jbgv</a>"
button.innerHTML = "SEND";

let container = document.querySelector(".container");
console.log(container);
container.appendChild(button);

let body = document.getElementsByTagName("body");


console.log(container.parentElement);

let ChildNodes = document.querySelector(".list-group").childNodes.length;
let Children = document.querySelector(".list-group").children.length;
console.log(ChildNodes);
console.log(Children);

// button.innerText

