// bind pollyfill
// Function.prototype.myBind = function (context, ...args) {
//   const fn = this;
//   return function (...newArgs) {
//     fn.apply(context, [...args, ...newArgs]);
//   };
// };

// var name1 = "Global";
// const obj = {
//   name1: "Sushma",
//   getName: function () {
//     console.log(this.name1);
//   },
// };

// const fn = obj.getName;
// fn(); // Global
// fn.call(obj); //Sushma

// function sum(a, b, c) {
//   console.log(a + b + c);
// }

// sum.apply(null, [1, 2, 3]); // 6
// sum.apply(null, [1, 2]); // nan

// const person = {
//   name: "Sushma",
// };

// function greet(g1, g2) {
//   console.log(g1, this.name, g2);
// }

// const newFn = greet.bind(person, "Hello");
// newFn("How are you?");

// Hello Sushma How are you?

// function x() {
//   console.log(this.value);
// }

// const obj = { value: 100 };

// const y = x.bind(obj);

// x(); // undefined
// y(); // 100

// const obj = { value: 42 };

// function print() {
//   console.log(this.value);
// }

// const fn = print.bind(obj);

// fn.call({ value: 100 });
// output is 42 as bind lock this permanently

// var x = 10;

// const obj = {
//   x: 50,
//   getX() {
//     console.log(this.x);
//   }
// };

// obj.getX.call({ x: 99 });

function max() {
  console.log(Math.max.apply(null, arguments));
}

max(10, 20, 5);
