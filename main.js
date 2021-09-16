// function makeTriangle(maxWidth){
//     for (let i = 0 ; i < maxWidth; i++) {
//         let a = ''
//         for(let k = 0; k <= i; k++) {
//             a += '#'  
//         }
//         console.log(a)    
//     }
// }
// makeTriangle(7)


// function catchFly(start,end){
//     let a = ''
//     for (let i = start ; i <= end; i++) {
//         if(i % 3 === 0 && i % 5 !== 0){
//             a+='Fizz '
//         }else if(i % 3 !== 0 && i % 5 === 0){
//             a+='Buzz '
//         }else if(i % 3 === 0 && i % 5 === 0){
//             a+='FizzBuzz '
//         }else {
//             a+=i+" "
//         }
//     }
    
//     return a
// }
// console.log(catchFly(1,100))



// function drawChessboard(width, height) {
//     for (let i = 1; i <= height; i++){
//         let ab = ''
//         for(let k = 1; k <= width; k++){
//             if(i% 2===0) {
//                 if(k % 2 ===0){
//                     ab+='#'
//                 }else{
//                     ab+=' '
//                 }
//             }else {
//                 if(k % 2 ===0){
//                     ab+=' '
//                 }else{
//                     ab+='#'
//                 }
//             }      
//         }
//         console.log(ab)
//     }
// }
// drawChessboard(8,8)


// function min(arr) {
// let ab = arr[0]
// for (let i =0; i < arr.length; i++){
//     if(arr[i]<ab){
//         ab = arr[i]
//     }  
// }
// return ab
// }
// console.log(min([2,5,1,-15,7,9,-245]))




// function range(start, end, step = 1) {
//     const arr = []
//     if(start <= end){
//         for (let i = start; i <= end; i+=step) {
//             arr.push(i)
//         }
//     }else {
//         for (let i = start; i >= end; i+=step) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(range(2,6,2))

// function sum(arr) {
//     let a = 0;
//     arr.forEach(el => a+=el)
//     return a
// }
// console.log(sum(range(1,5)))






// const arr=["A", "B", "C"]

// function reverseArray(arr) {
//     const arr2 = []
//     for(let i = arr.length- 1; i >= 0;i--){
//         arr2.push(arr[i])
//     }
//     return arr2
// }

// console.log(reverseArray(arr))






