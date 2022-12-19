const data = 'madam'

const newData = data.toString().split("").reverse().join("")
console.log(newData)

function factorial(num){
    let fact = 1;
    if(num == 0 || num == 1){
        return fact;
    }else{
        for(i=num ; i >= 1 ; i--){
            fact = fact * i
        }
        return fact
    }
}
let num = 5
fact = factorial(num)
console.log(fact)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits)

const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
fruitsss.splice(2, 2);
console.log(fruitsss)

const fruitsdata = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitsdata.slice(3);
console.log(citrus)

const datafruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const newDataF = datafruit.sort()
const newDataFR = newDataF.reverse()
console.log(newDataFR)