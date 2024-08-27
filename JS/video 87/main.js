const fs= require("fs")

// console.log(fs);

console.log("Starting....");
fs.writeFile("Atrajit.txt","Hi I am Atrajit",()=>{
    console.log("Writing Done!");
})
console.log("Ending....");