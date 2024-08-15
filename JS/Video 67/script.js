console.log("Hello World")

let cont = document.body.children[0]
console.log(document.body.children)
console.log(cont)
let cont2 = cont.children[0]
let cont3 = cont.children[1]
let cont4 = cont.children[2]
let cont5 = cont.children[3]
let cont6 = cont.children[4]
console.log(cont2)
console.log(cont2.childNodes[0])
let text1 = cont2.childNodes[0];
let text2 = cont3.childNodes[0];
let text3 = cont4.childNodes[0];
let consent1 = confirm("Wanna change box1?")
let consent2 = confirm("Wanna change box2?")
let consent3 = confirm("Wanna change box3?")
if (consent1) {

    text1.replaceWith("In Red")
    cont2.style.backgroundColor="red"

}
if (consent2) {

    text2.replaceWith("In Green")
    cont3.style.backgroundColor="green"

}
if (consent3) {

    text3.replaceWith("In Yellow")
    cont4.style.backgroundColor="yellow"

}
document.title="Walking Through The DOM"
// let img=document.body.style.backgroundImage="Youtube.jpeg"
