let Boxes = document.getElementsByClassName("box")

console.log(Boxes)

// Boxes[2].style.backgroundColor="yellow"
let yellow_box = document.getElementById("yellow")
yellow_box.style.backgroundColor = "yellow"

let conf = confirm("Wanna Make all green?")
if (conf) {

    for (let index = 0; index < Boxes.length; index++) {
        const element = Boxes[index];
        element.style.backgroundColor = "green"
    }
}