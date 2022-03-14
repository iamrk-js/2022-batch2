// true || alert("not printed");
// false || alert("printed");

// function reverseString(str){
//     let revStr = '';
//     for(var i = str.length - 1 ; i >= 0; i--){
//         revStr += str.charAt(i)
//     }
//     return revStr;
// }

// console.log(reverseString('Hello'))

// // 4! >> 4 * 3 * 2  * 1

// function facto(n){
//     if(n == 1){
//         return 1
//     }
//     return n * facto(n - 1)
// }
// console.log(facto(4))

// // 100011110011111

// function getCount(n){
//     var n = n.toString()
//     let count = 0;
//     for(let i = 0; i < n.length; i++){
//         if(n.charAt(i) === n.charAt(i + 1)){
//             count++
//         }
//     }
//     return count
// }

// console.log(getCount(100011110011111))





let arr = ['HTML', 'CSS', 'js', 'Angular']




let mapArr = arr.map(skill => `I love ${skill}`);

console.log(mapArr);


let frameWork =  arr.filter(skill => skill === 'Angular');
console.log(frameWork);

let ages = [20,30,40,50];

let totalAges = ages.reduce((total, age) =>total += age, 0)


// console.log(totalAges)

// interface Iemp {
//     fname: string,
//     lname : string,
//     age : number
// }

// let emp : Iemp[]= [
//     {
//         fname: "Jon",
//         lname : "doe",
//         age : 35
//     }
// ]

