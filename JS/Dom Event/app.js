// clck, dblclck

let btn = document.querySelector("#addBtn");
let text = document.querySelector(".card-header");


// btn.addEventListener("click", (e)=>{
//     console.log(e.target);
//     text.style.background = "red";
//     text.textContent = "<a>link</a>";
//     text.innerHTML = "<a>link</a>";
//     e.preventDefault();
// });



// btn.addEventListener("dblclick", (e)=>{
//     console.log(e.target);
//     text.style.background = "blue";
//     text.textContent = "<a>link</a>";
//     text.innerHTML = "<a>link</a>";
//     e.preventDefault();
// });

// mouse Event
// click eden zaman
// btn.addEventListener("mouseup", run );

// function run(e) {
//     text.style.background="yellow";
//     e.preventDefault();
// }

// btn.addEventListener("mousedown", run );

// function run(e) {
//     text.style.background="green";
//     e.preventDefault();
// }

// hover olan zaman
btn.addEventListener("mouseout", run );

function run(e) {
    text.style.background="grey";
    e.preventDefault();
}

