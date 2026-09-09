// let btns = document.querySelectorAll("button");

// for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    // btn.addEventListener("dblclick",function(){
    //     console.log("you double clicked me");
    // });


    // btn.onmouseenter = function(){
    //     console.log("You entered a button");
    // }
//}

// btn.onclick = function (){
//     alert("Button was clicked");
// }

// function sayHello(){
//     alert("Hello");
// }

// function sayName(){
//     alert("Apna College");
// }
// --------------------------------------------------------

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let random_color = getRandomColor();
    h3.innerText = random_color;
    h3.style.color = random_color;

    let div = document.querySelector("div");
    div.style.backgroundColor = random_color;

    console.log("color updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}