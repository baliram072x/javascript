// let arr = [1, 2, 4, 5, 7]
// // 0.1,2,3,4
// arr[0] = 5666;
// // console.log(arr, typeof arr)
// // console.log(arr.length)
// // console.log(arr[0])
// // console.log(arr[2])
// // console.log(arr[4])


// console.log(arr.toString())
// console.log(arr.join(" and "))



// //concat
// let a1 = [1, 2, 3]
// let a2 = [4, 5, 6]
// let a3 = [7, 8, 9]

// console.log(a1.concat(a2, a3))
//           //sorting
// // let a = [7, 8, 9]
// // console.log(a.sort[1, 4, 6])

//                  //splice
// const numbes=[1,2,3,4,5]
// console.log(numbes.splice(1))

//                   //slice
// const num =[1,2,3,4]
// console.log(num.slice(2))

let a = [1, 93, 5, 6, 88]


// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })
// let obj ={
//     a:1,
//     b:2,
//     c:3
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element,key)

//     }
// }

// for (const itrator of a) {
//     console.log(itrator)


// // }

// map filter

let arr = [1, 3, 5, 7, 11, 13]
let newarr3 =[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr3.push(element**2)
}

let newarr = arr.map((e) => {
    return e ** 2
})
console.log(newarr)


console.log(newarr)
const greaterthenseven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}

console.log(arr.filter(greaterthenseven))

let arr2 = [1, 2, 3, 4, 5, 6]


const red = (a, b) => {
    return a * b
}

console.log(arr2.reduce(red))