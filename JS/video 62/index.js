/*
Creat a buiness name generator:
 Adjectives:
 Crazy
 Amazing
 Fire
 
 Shop Name:
 Engine
 Foods
 Garments

 Another Word:
 Bros
 Limited
 Hub
*/

let Adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let Shop_Name = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let Another_Words = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

function BusinessNameGenerator(adj, SN, AW) {
    return adj + SN + AW
}

function getRandomInt(min, max) {
    min = Math.ceil(min);  // Ensures the minimum is an integer
    max = Math.floor(max); // Ensures the maximum is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generates a random integer in the range [min, max]
}

// console.log(Math.ceil(1.2))
// console.log(Math.floor(1.2))

let randomAdj=getRandomInt(1,3)
let randomshop=getRandomInt(1,3)
let randomAnother=getRandomInt(1,3)

console.log(BusinessNameGenerator(Adjectives[randomAdj],Shop_Name[randomshop],Another_Words[randomAnother]))

// console.log(randomInt)
// console.log(Adjectives[randomInt])