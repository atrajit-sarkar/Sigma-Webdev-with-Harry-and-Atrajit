import fs from "fs/promises"
import { json } from "stream/consumers";

let a= await fs.readFile("Atrajit.txt")
let b= await fs.readFile("Atrajit.json")

console.log(a.toString());
console.log(b.toString());


