let button=document.getElementById("btn")

// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML="<b>Hey I am Clicked</b>"

// })

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random value for red (0-255)
    const g = Math.floor(Math.random() * 256); // Random value for green (0-255)
    const b = Math.floor(Math.random() * 256); // Random value for blue (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Construct the RGB color string
}

document.addEventListener("keydown",(e)=>{
    console.log(e)

})

// let onclickfunc=(e)=>{
//     document.querySelector(".box").innerHTML="<b>Hey I am Clicked</b>"
// }

function onclickfunc(e){
    document.querySelector(".box").innerHTML="<b>Hey I am Clicked</b>"
}

button.addEventListener("click",onclickfunc)

// setTimeout(() => {
//     console.log("I am a hacker")
//     document.body.style.backgroundColor=getRandomColor();
// }, 3000);

setInterval(() => {
    document.body.style.backgroundColor=getRandomColor();
}, 3000);