console.log("Hello");
let a = 2;
let b = 3;
console.log(a + b);
let nul = null;
console.log(typeof nul);
let age = 20;
if (age >= 18) {
  console.log("yes");
} else {
  console.log("no");
}
let ar = [1, 2, 3, 4];
console.log(ar[0]);
ar.push(5);
ar.pop();
console.log(ar);

//object
letstudents = {
  name: "Srijan",
  age: 21,
};

//function
function add(p, q) {
  return p + q;
}
console.log(add(5, 7));

//arrow function
const multiply = (p, q) => p * q;
console.log("arrow function", multiply(5, 10));

//date
let today = new Date();
console.log(today);

//math
console.log(Math.sqrt(2));
console.log(Math.pow(2, 3));

//string
txt = "hello world";
console.log(txt);
console.log(txt.length);
console.log(txt.includes("html"));

//typr conversion
let strnum = "123";
let convert = Number(strnum);
console.log(convert + 10);
