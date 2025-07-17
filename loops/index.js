console.log("hey i am tutorial on loops")

let a = 1;

console.log(a)
console.log(a + 1)
console.log(a + 2)

//for loop

// for (let i = 0; i < 100; i++) {
//     console.log(a + i);

// }
//for in loop
let obj = {
    name: "baliram",
    role: "programmer",
    company: "code with baliram AI"
}

for (const key in obj) {
    const Element = obj[key];
    console.log(key ,Element);
        
    }


for (const c of "baliram") {
    console.log(c);

}

// let i=0;
// while(i<60) {
//     console.log(i)
//     i++;
// }

let i=10;
do{
    console.log(i)
    i++
}while(i<6)
    
