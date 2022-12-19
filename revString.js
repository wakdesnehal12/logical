function revString(str){
    var newStr = "";
    for(var i=str.length - 1; i >= 0; i--){
        newStr = newStr + str[i]
    }
    return newStr;
}
const str = 'hello'
const strDta = revString(str)
console.log(strDta)
