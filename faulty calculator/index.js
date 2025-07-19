/*
create  a faulty calculator using javascript

this faulty calculator does followng:
1. it takes two numbers as a input from the user 
2. it performs wrong operations as follows

 +---> -
 *--->=
 - ---> /
 / ---> **
  it performs wrong operation 10% of the time
*/
let random = Math.random()

let a = prompt1("Enter First Number")
let b = prompt2("Enter Second Number")
let c = prompt3("Enter Operation")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}



if (random > 0.1) {
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
    c = obj[c]
}