let first_box = document.querySelector(".box")
let box2 = document.body.getElementsByClassName("box")[1];
console.log(first_box)
let hide_box1 = confirm("Want to hide box1?")
if (hide_box1) {
    first_box.hidden = true
    box2.style.height = "28px"
    box2.style.width = "128px"
    box2.style.paddingLeft = "25px"
    box2.style.paddingTop = "6px"
    box2.style.paddingBottom = "0px"
    box2.style.paddingRight = "15px"
    box2.innerHTML = "Box1 is gone Baby!"

}

let div=document.createElement("div")
div.setAttribute("class","box")
div.innerHTML="I am Created <b>by Atrajit</b>"
document.querySelector(".container").append(div)
let box7 = document.body.getElementsByClassName("box")[6];
box7.style.height="28px"
box7.style.width="200px"
box7.style.width="200px"
box7.style.paddingLeft = "50px"
box7.style.paddingTop = "6px"
box7.style.paddingBottom = "0px"
box7.style.paddingRight = "15px"

// height: 28px;
//     width: 128px;
//     padding-left: 25px;
//     padding-top: 6px;
//     padding-bottom: 0px;
//     padding-right: 15px;
//    