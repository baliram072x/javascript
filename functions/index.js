// console.log("hey baliram you are good")
// console.log("hey baliram you are brave")
// console.log("hey baliram your t shirt is nice ")
// console.log("hey baliram you are intelligent")

function nice(name) {
    console.log("hey " + name + " you are good")
    console.log("hey " + name + " you are brave")
    console.log("hey " + name + " your tshirt is good")
    console.log("hey " + name + " you are intelligent")

}

nice("shiv")

nice("punam")

function sum(a, b ,c=3) {
    // console.log(a + b)
    return a+b+c
}
result1 =sum(3, 5)
result2 =sum(3, 6)
result3 =sum(999, 999)

console.log("the sum of this number is: ",result1)
console.log("the sum of this number is: ",result2)
console.log("the sum of this number is: ",result3)

const func1 =(a)=>{
    console.log("i am an arrow function",a)
}


func1(34);
func1(35);
func1(36);
func1(37);
