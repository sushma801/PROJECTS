// reverse a string
// const reverse = (str, st, end) => {
//   if (st == end) return str;
//   return str.charAt(end - 1) + reverse(str.substring(0, end - 1), 0, end - 1);
// };
// const str = "sushma";
// console.log(reverse(str, 0, str.length));

//Remove Duplicates from array
// Input: [1,2,2,3,3,4]
// Output: [1,2,3,4]
// const findFrequency = (arr, max) => {
//   const freq = new Array(max + 1).fill(0);
//   for (let i of arr) {
//     if (typeof i === "number") freq[i]++;
//     else {
//       //   console.log(i);

//       freq[i.charCodeAt(0) - 97]++;
//     }
//   }
//   return freq;
// };
// const input = [1, 2, 2, 3, 3, 4];
// const frequency = findFrequency(input, Math.max(...input));
// const result = [];
// for (let i = 0; i < frequency.length; i++) {
//   if (frequency[i] >= 1) {
//     result.push(i);
//   }
// }
// console.log({ result });

// Anagram
// Input: "listen", "silent"
// Output: true
// const st1 = "listen",
//   st2 = "silent";
// const len1 = st1.length,
//   len2 = st2.length;
// let flag = true;
// if (len1 !== len2) flag = false;
// else {
//   const freq1 = findFrequency(st1, 25);
//   const freq2 = findFrequency(st2, 25);
//   for (let i = 0; i < freq1.length; i++) {
//     // console.log(freq1[i], freq2[i]);
//     if (freq1[i] != freq2[i]) {
//       flag = false;
//       break;
//     }
//   }
// }
// console.log(flag);

// output order

// console.log("a");

// setTimeout(() => console.log("b"), 0);

// Promise.resolve().then(() => console.log("c"));

// console.log("d");

// o/p: a d c b

// implement the function sum(1)(2)(3)() // 6
// const sum = (a) => {
//   return function (b) {
//     if (b == undefined) {
//       return a;
//     } else {
//       return sum(a * b);
//     }
//   };
// };
// console.log(sum(1)(2)(3)(5)(10)());

// 14. Given an API URL, make a function that retries 3 times

// Retry logic = common real-round question.

// const value = "Calling you";
// const URL = "https://jsonplaceholder.typicode.com/users";

// const retryFunction = async () => {
//   // console.log({ response })
//   for (let i = 0; i < 3; i++) {
//     const { status } = await fetch(URL);
//     // console.log(`${value}-> ${i}`);
//     if (status == 200) break;
//     else console.log(`${URL} hitted ${i + 1} times`);
//   }
// };
// retryFunction();

// const tree = {
//   id: 1,
//   children: [
//     {
//       id: 2,
//       children: [
//         {
//           id: 4,
//           children: [],
//         },
//       ],
//     },
//     {
//       id: 3,
//       children: [],
//     },
//   ],
// };

// // const result = [];

// const inOrder = (root) => {
//   if (!root) return;
//   const node = root.children;
//   if (node.length > 0) {
//     inOrder(node[0]);
//   }
//   console.log(root.id);
//   for (let i = 1; i < node.length; i++) {
//     inOrder(node[i]);
//   }
// };

// console.log(inOrder(tree));

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// bind pollyfill
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    fn.apply(context, [...args, ...newArgs]);
  };
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Sushma" };

const boundGreet = greet.myBind(person, "Hello");

boundGreet("!");
