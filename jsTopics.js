// RECURSION: Process in which a function calls itself directly or indirectly.
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

//forEach method: perform the given function once for each of the array elements

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.forEach((n, index, array) => {
    console.log(n * 2, index, array);
})

//map method of array:

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr3 = arr2.map((n) => n * 2)
console.log(arr3)

//filter
