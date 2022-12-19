//factorial
function factorial(num){
    let fact = 1
    if(num == 0 || num == 1){
        return fact
    }else{
        for(i=num; i>=1; i--){
            fact = fact * i
        }
    }
    return fact;
}

let num = 5;
fact = factorial(num)
console.log(fact);

//palidrome
// ---------------------------------
//For Loop.
// method1
// for(i=0; i<5; i++){
//     console.log(i)
// }
// ans: 0 1 2 3 4

// method2
// var i = 0
// for(; i<5;){
//     i++
//     console.log(i)
// }
// ans: 1, 2, 3, 4, 5

for(i=0; ; i++){
    
    if(i == 2){
        break
    }
    
    console.log(i)
}
// ans: 1

