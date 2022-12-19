function factorial(num){
    let fact = 1
    if(num == 0 || num == 1){
        return fact
    }else{
        for(i=num; i >= 1; i--){
            fact = fact * i
        }
        return fact
    }
}
let num = 5
fact = factorial(num)
console.log(fact)

var data = [50, 30, 25,80, 90, 0];
var max = 0;
var maxData = data.length;

for(i=0; i<=maxData; i++){
    if(data[i] > max){
        max = data[i]
    }
}
console.log(max)


let n = 6;
let string = "";

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        if(i === n) {
            string += "1";
        }
        else {
            if (j == 0 || j == i - 1) {
                string += "1";
            }
            else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);