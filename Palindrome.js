const value = 'madam' 
const data  = 'hello'
 
function palinDrome(){
    let newValue = value.toString().split("").reverse().join("")
    console.log(newValue)

    let newData = data.toString().split("").reverse().join("")
    console.log(newData)
}
palinDrome()


// loop 

const dataloop = 'madam';

const lengthData = dataloop.length
console.log(lengthData)

function palindromeLoop(){
    for(i=0; i < lengthData/2 ; i++){
        if(dataloop[i] !== dataloop[lengthData - 1 - i]) {
            return 'not palindrome'
        }
    }
    return 'palindrome'
}
palindromeLoop()

//factorial

function factorial(fact){
    let num = 1;
    if(fact == 0 || fact == 1){
        return num;
    }else{
        for(var i = fact; i >= 1; i--){
            
            num = num * i
            
        }
        return num
    }
    
}
const fact = 5
const factData = factorial(fact)
console.log(factData)