//For each method
const forarr = [1,2,3,4,5]
forarr.forEach((item) => {
    return console.log(item + 1)
})
// ans: 1 2 3 4 5

//includes
const incArr = [1,2,3,4,5]
const incData = incArr.includes(6);
console.log(incData)
// ans: false

//filter
const filtArr = [1,2,3,4,5]
const filtData = filtArr.filter((num) => num > 2)
console.log(filtData)
// ans: 3 4 5

//map
const mapArr = [1,2,3,4,5]
const mapData = mapArr.map((num) => num + 1 )
console.log(mapData)
// ans: 2 3 4 5 6

//Reduce
const redArr = [1,2,3,4,5]
const redData = redArr.reduce((total, value) => total + value);
console.log(redData)
// ans: 15

//some method
const arrsome = [ 1,2,3,4]
const someData = arrsome.some((num) => {
    return num > 1
});
console.log(someData);
// ans: true

// every method
const arr = [1,2,3,4,5,6];
const everyDt = arr.every((num) => num > 6);
console.log(everyDt);
const everyDts = arr.every((num) => num < 7);
console.log(everyDts);
const everyDtall = arr.every((num) => num < 5);
console.log(everyDtall);
const everyDtalls = arr.every((num) => num > 5);
console.log(everyDtalls);
// ans: false

//sort method
const arrdt = [1,2,3,4,5,6];
const desData = arrdt.sort((a,b) => a > b ? -1 : 1);
console.log(desData);
// ans: true

const ascending = arrdt.sort((a,b) => a < b ? -1 : 1)
console.log(ascending);


const fruit = [
    { color: 'white', size: 'XXL'},
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' }
]

const data = fruit.sort((a,b) => (a.color > b.color) ? 1 : -1 )
console.log(data)


//From method

const nameData = "Snehal";
const fromData = Array.from(nameData);
console.log(fromData)

//Array.of method
//This creates array from every arguements passed into it.
const numData = Array.of(1,2,3,4,5,6);
console.log(numData)


const dataff = ['a', 'abcd', 'abc', 'aabcdef', 'ab']

var high = 999;
var highValue;

for (i=0; i < dataff.length; i++){
    if(dataff[i].length < high){
        high = dataff[i].length;
        highValue = dataff[i];
    }
}
console.log(highValue);


const datass =  [1, 2, 2, 4, 5, 6, 6];
  const newData =[];
  
  data.map(elem => {
    //   console.log(newData.includes(data[i]))
      if(!newData.includes(elem)){
          newData.push(elem)
      }
     
    }
  )

  console.log(newData)