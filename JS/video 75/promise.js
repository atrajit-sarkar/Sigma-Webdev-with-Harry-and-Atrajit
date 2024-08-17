let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false;
        if (success) {
            resolve("Promise 1 resolved")
        }
        else {
            reject("Sorry I can't keep Promise1")
        }
    }, 1000);
});
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false;
        if (success) {
            resolve("Promise 2 resolved")
        }
        else {
            reject("Sorry I can't keep Promise2")
        }
    }, 2000);
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Promise 3 resolved")
        }
        else {
            reject("Sorry I can't keep Promise3")
        }
    }, 3000);
});

// Promise.all([promise1, promise2, promise3]).then((messages) => {
//     console.log(messages); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
// }).catch((error) => {
//     console.log(error);
// });

// Promise.allSettled([promise1, promise2, promise3]).then((messages) => {
//     console.log(messages); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
// }).catch((error) => {
//     console.log(error);
// });

// Promise.race([promise1, promise2, promise3]).then((messages) => {
//     console.log(messages); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
// }).catch((error) => {
//     console.log(error);
// });

Promise.any([promise1, promise2, promise3]).then((messages) => {
    console.log(messages); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
}).catch((error) => {
    console.log(error);
});
