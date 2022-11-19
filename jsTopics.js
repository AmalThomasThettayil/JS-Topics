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

//map method of array: creates a new array by preforming the function on each element in the array

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr3 = arr2.map((n) => n * 2)
console.log(arr3)

//filter method of array: elements in the parent array are passed through a test provided by the function(filtering) ,
//a shallow copy of the passed elements are printed.
// Shallow copy: keeps reference to the parent
// Deep copy: no reference to parent

let arr4 = arr.filter((n) => n > 5)
console.log(arr4);

//reduce method of array:a reducer call back function is run on each array element,
// return value of the calculation on the preceding element is passed on to the next element,
// finally the array is reduced to one value. 

let arr5 = arr.reduce((n, m) => n + m)
console.log(arr5);

//set:
let arr6 = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8]
let arr7 = new Set(arr6)
let arr8 = Array.from(arr7);
console.log(arr8);
