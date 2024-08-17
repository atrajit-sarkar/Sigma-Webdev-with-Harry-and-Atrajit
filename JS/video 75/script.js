console.log("Atrajit is a Hacker")
console.log("Nobita is Noob!")

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random value for red (0-255)
    const g = Math.floor(Math.random() * 256); // Random value for green (0-255)
    const b = Math.floor(Math.random() * 256); // Random value for blue (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Construct the RGB color string
}

setTimeout(() => {
    console.log("Hrisav is Gamer")

}, 0);

document.getElementById("button").addEventListener("click", (e) => {
    document.body.style.backgroundColor = getRandomColor()
}
)
// setInterval(() => {
//     document.body.style.backgroundColor=getRandomColor()

// }, 1000);
const callback = (arg) => {
    console.log(arg)
}

function loadscript(src, callback) {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Atrajit")
    document.body.append(sc)
}

loadscript("myscript.js",callback)
console.log("Fuck Am I late?")