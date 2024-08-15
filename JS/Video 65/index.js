let Natural_No = [];
let n = 10;

for (let index = 0; index < n; index++) {
    Natural_No[index] = index + 1;

}
function multiply(a, b) {
    return a * b;
}

// factorial = Natural_No.reduce(multiply);
// console.log(factorial)

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    else {
        return n * factorial(n - 1)
    }


}

console.log(factorial(4))