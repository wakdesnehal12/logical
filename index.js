//var is global used 
//Array
const myArr = ["mango", "banana", "kiwi"];
console.log(myArr[1]);
// console.log(typeof myArr);

//object
// const myObj = { myname : "sankalp", age: 31, city: "nagpur"};
// console.log(myname);

// object destructing

// const myObj = { myname : "sankalp", age: 31, city: "nagpur"};
// const { myname , age, city } = myObj;
// console.log(myname);
// console.log(age);
// console.log(city);

//object Cloning
// const myTwoObj = {...myObj, mobile: "134565312"};
// console.log(myTwoObj);

//object destructuring

// const {myname, age, city} = myobj;
// console.log(myobj);//incomplete

//Array Functions
//1). Map
//2). filter

//1). Map ..It is used for return;

// const myNewArr = [
//     { myname : "sankalp", age: 31, city: "nagpur"}, //Array of Object
//     { myname : "sahil", age: 22, city: "bhandara"},
//     { myname : "nishant", age: 23, city: "tumsar"},
//     { myname : "digambar", age: 21, city: "digohri"},
//     { myname : "pranjali", age: 24, city: "pune"}
// ];

// myNewArr.map((obj, i) => {
//     console.log(obj.myname, i);
// })

// const mbnumArr = [9999912, 999913, 999999914, 45454545, 6545555];
// myNewArr.map((obj, i) => {
//     obj.mobile = mbnumArr[i];
// })
// console.log(myNewArr)


// 2). filter
// const myNewArr = [
//     { myname : "sankalp", age: 31, city: "nagpur"}, //Array of Object
//     { myname : "sahil", age: 22, city: "bhandara"},
//     { myname : "nishant", age: 23, city: "tumsar"},
//     { myname : "digambar", age: 21, city: "digohri"},
//     { myname : "pranjali", age: 24, city: "pune"}
// ];

// const filterArray = myNewArr.filter((myObj, i) => myObj.age > 21);
// console.log(filterArray);


//hook = {useEffect, useState, useRef}...(total: 8)..we can create custom hook by using with 'use' wrd;

//default export - u can chnge name while imporring

        //(React-Router-Dom)
//we can used ':' -- it is a Dynamic part that means on time change.

//petty cash entry project
    //for dashboard
//1. / -> Login
//2. /home -> Dashboard
//3. /items -> List
//4. /add -> new add
//5. /edit/:id -> Edit

    //for petty casH

//1. List
//2. Add
//3. EDit
//4. Save


//API(Application Programing Interface)
//It is used for data calling (transfer or receive)

