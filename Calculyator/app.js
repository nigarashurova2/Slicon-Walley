let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn1");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");


buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        let value = button.dataset.num;
        screen.value += value;
    })
});


equal.addEventListener("click", ()=>{
    if (screen.value === "") {
        screen.value = "Please Enter";
    }else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
  
});

clear.addEventListener("click", ()=>{
    screen.value = "";
});