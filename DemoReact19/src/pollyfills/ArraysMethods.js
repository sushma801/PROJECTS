// pollyfill for includes method

Array.prototype.includesPollyfil = function (target) {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    if (target == this[i]) {
      return true;
    }
  }
  return false;
};

// pollyfill for map method
Array.prototype.myMap = function (callback, args) {
  const len = this.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(callback.call(args, this[i], i, this));
  }
  return result;
};

// pollyfill for filter method
Array.prototype.myfilter = function (callback, args) {
  const len = this.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    if (callback.call(args, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// pollyFill of findIndex
Array.prototype.myFindIndex = function (callback, args) {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    if (callback.call(args, this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

// pollyfill for find
Array.prototype.myFind = function (callback, args) {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    if (callback.call(args, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

// pollyFill for findLast
Array.prototype.myFindLast = function (callback, args) {
  const len = this.length;
  for (let i = len - 1; i >= 0; i--) {
    if (callback.call(args, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

const arr = [1, 3, 6, 5, 4];
console.log(arr.includesPollyfil(2));
console.log(arr.includesPollyfil(5));
console.log(arr.myMap((i) => i * 4));
const arr2 = arr.myMap((i) => i * 4);
console.log(arr.myfilter((i) => i > 3));
console.log(arr.myfilter((i) => i < 5));
console.log(arr.myFindIndex((i) => i == 5));
console.log(arr.myFind((i) => i > 20));
console.log(arr2.myFind((i) => i > 20));
console.log(arr.myFindLast((i) => i > 16));
console.log(arr2.myFindLast((i) => i > 16));

// write a method to flat an array;
const arr1 = [1, 2, [3, 5, 7], [5, 3, [3, 6]]];
function myFlat(arr1) {
  //   const len = arr1.len;
  const result = [];
  for (let i of arr1) {
    if (Array.isArray(i)) {
      result.push(...myFlat(i));
    } else {
      result.push(i);
    }
  }
  return result;
}
console.log(myFlat(arr1));
const flatenArray = myFlat(arr1);
// write a method to sort an array
function sort(arr) {
  const len = arr.length;
  let temp;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
const sortedArray = sort(flatenArray);
console.log(sortedArray);
