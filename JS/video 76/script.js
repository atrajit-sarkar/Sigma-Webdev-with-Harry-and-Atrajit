let random = Math.random()
// console.log(random);

// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (random < 0.5) {
//                 resolve("Promise is resolved")
//             }
//             else {
//                 reject("Promise can't be kept")
//             }
//         }, 10000);
//     })
// }

async function getdata() {
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = (await x).json()
    console.log(data);

    return data
}

async function main() {
    document.body.style.backgroundColor = "yellow"
    let data = await getdata()
    console.log(data);
    document.body.style.backgroundColor = "green"
    console.log("Bye Bye");


    // data.then((message) => {
    //     console.log(message);
    //     document.body.style.backgroundColor = "green"

    // }
    // ).catch((error) => {
    //     console.log(error)
    //     document.body.style.backgroundColor = "red"
    // }
    // )



}
main()