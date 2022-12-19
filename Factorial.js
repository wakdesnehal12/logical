function factorial(n){
    let fact = 1;
        if (n == 0 || n == 1){
            return fact;
        }else{
            for(var i = n; i >= 1; i--){
            fact = fact * i;       
        }
            return fact;
    }  
}
    
    let n = 4;
    fact = factorial(n)
    console.log("The factorial of " + n + " is " + fact) 


    //palindrome
    const value = 121;
    const palinDrome = () => {
        let newValue = value.toString().split("").reverse().join("");

        console.log(newValue)
        let strValue = value.toString();

        if(newValue === strValue){
            console.log('Palidrome');
        }else{
            console.log("Not a Palidrome")
        }
    }

    palinDrome();


    // Max

    var dataMax = [10, 20, 50, 0 , 5, 86, 98, 102, 87, 25, 36];

    var max = 0;
    var maxvalue = dataMax.length;

    for(i = 0; i <= maxvalue; i++){
        if(dataMax[i] > max){
            max = dataMax[i];
        }
    }

    console.log(max);

   
   //min
    var dataMin = [10, 20, 50, 0, 55, 86, 98, 102, 87, 25, 36];

    var min = 0;
    var minvalue = dataMin.length;

    for(i = 0; i <= minvalue; i++){
        if(dataMin[i] < min){
            min = dataMin[i];
        }
    }

    console.log(min);
