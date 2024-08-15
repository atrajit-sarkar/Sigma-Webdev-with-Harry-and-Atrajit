alert("Hello World")

console.log("Code is running......")
console.log("Code is also running......")
console.log("Code is looking like a wow......")

var a=prompt("Enter Your Number: ")
var isTrue=confirm("Are you sure you wanna leave this page and blast your computer")
console.log(isTrue)
if (isTrue) {
    console.log("Computer is Blasting...")
    document.body.style.backgroundColor="red"
}
else{
    console.log("Computer is not blasting.....")
    document.title="Hey I am Good"
}
console.log("Your Number is "+a)

