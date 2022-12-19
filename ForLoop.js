// ex.1
// for (i = 0; i < 2; i++) {
//     console.log(i)
//     for (j = 0; j < 4; j++) {
//         console.log(j)
//     }
// }
// o/p - 0 0 1 2 3 1 0 1 2 3 2 0 1 2 3

// ex.2
// var arr = [1,2]
// function printArr(arr){
//     for(i=0; i<arr.length; i++){
//         console.log(arr[i])
//     }
// }
// printArr(arr)
// o/p -- 1, 2

//ex.3 2D arr
// var arr = [[1,2], [3,4], [5,6]]
// function arrData(arr){
//     for(i=0; i< arr.length; i++){
//         // console.log(arr[i])
//         for(j=0; j < arr[i].length; j++){
//             console.log(arr[i][j])
//         }
//     }
// }
// arrData(arr)
// o/p=> 1 2 3 4 5 6

//ex.4 Even numbers
var arr = [12, 13, 18, 22, 49, 83]

// function evenArr(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2 == 0){
//             console.log(arr[i])
//         }
//     }
// }
// evenArr(arr)
// o/p=12 18 22

// function deleteArr(arr, elem){
//     for(i=0; i < arr.length; i++){
//         // console.log(arr[i])
//         if(arr[i] == elem){
//             // console.log(arr[i] == elem)
//             arr.splice(arr[i])
//             console.log(arr.splice(arr[i]))
//         }
//     }
// }
// deleteArr(arr, 18) pending

// Example 1: Display a Text Five Times
// var n=5
// for (let i = 1; i <= n; i++) {
//     console.log('snehal')
// }

// Example 2: Display Numbers from 1 to 5
var n=5
for(i=1; i<=n; i++){
    console.log(i)
}

// Example 3: infinite numbers
for(i=1; i>0; i++){
    console.log(i)
}

// Example 4: Display Sum of n simple Numbers
// Example 4: program to display the sum of n natural 

// let sum = 0;
// const n = 100;
//  for(i = n; i >= 1; i--){
//     sum = sum + i
//  }
//  console.log(sum)
//incomplete

// Hollow Pyramid Star Pattern
let n = 5;
let string = "";
for(i=1; i<=n; i++){
    // for(j=1; j<=n - i; j++){
    //     string += i
    // }
    console.log(string)
    // string += "\n";
}
// console.log(string)