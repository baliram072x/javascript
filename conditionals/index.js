console.log("hello i am conditional tutorial");

// let age= 5;

// if (age>18){
//     console.log("you can drive");
// }

// else{
//     console.log("you cannot drive");
// }

let ages = 1
let grace = 3
ages += grace

console.log(ages)
console.log(ages + grace)
console.log(ages - grace)
console.log(ages * grace)
console.log(ages / grace)
console.log(ages ** grace)
console.log(ages % grace)

let age = 2;

if (age == 18) {
    console.log("you can drive")
}

else if (age == 1) {
    console.log("are you kidding")
}

else {
    console.log("you cannot not drive")
}


a = 6;
b = 8;

let c = a > b ? (a + b) : (a - b);

/*
translate to:
if (a>b){
let c= a-b
}

else{
    let c= a-b;
    }
*/