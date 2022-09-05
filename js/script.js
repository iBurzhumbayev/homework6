"use strict";

let array = ['a', 5, 'asd', 6];

function myFunc(arr, arg){
    let index = arr.indexOf(arg);
    console.log(index);

    arr.splice(index, 1);
    console.log(arr);
}

console.log(myFunc(array, 5));