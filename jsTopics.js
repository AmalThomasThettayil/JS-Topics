// RECURSION
// 1)Factorial Using forloop

let fact = (n) => {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res = i * res;
    }
    console.log(res)
    console.log("**********************************");
}
let n = 5
fact(n)

// 2)Factorial Using recursion

let fact2 = (n) => {
    let res = 1;
    if (n == 0) {
        return 1;
    } else {
        return n * fact2(n - 1)
    }
}
fact2(5);
console.log(fact2(5));
console.log("**********************************");