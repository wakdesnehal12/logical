var num = 5;
for(var fact = 1; num >= 1; num--){
    fact = fact * num
}
console.log(fact)
//while
var num = 3;
var fact = 1;
var i = 1;
while(i<=num){
    fact= fact*i;
    i++;
}
console.log(fact)
//do while
var num = 4;
var fact = 1;
var i = 1;
do{
    fact = fact * i;
    i++;
}while(num>=i)
console.log(fact)