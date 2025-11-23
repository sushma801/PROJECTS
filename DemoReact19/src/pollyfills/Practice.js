// write throuttling function
const throughttling = function (funct, delay) {
  let flag = false;
  return function (...args) {
    if (flag) return;
    flag = true;
    funct.apply(this, args);
    setTimeout(() => {
      flag = false;
    }, delay);
  };
};

const handleMethod = () => {
  console.log("Hey, I am here");
};

const callingThrought = throughttling(handleMethod, 3000);
callingThrought();
callingThrought();
callingThrought();
callingThrought();
callingThrought();

// Write pollyfill for map method;
Array.prototype.myMap = function (callback, args) {
  let len = this.length;
  let result = [];

  for (let i = 0; i < len; i++) {
    const value = callback.call(args, this[i], i, this);
    result.push(value);
  }

  return result;
};

const arr = [1, 2, 4, 7, 9, 10];
const result = arr.myMap((i) => i * 5);
console.log({ result });

// write pollyfill for promise
const myPromise = function (callback) {
  // methods for reject and resolve state
  let onResolve, onReject;
  // state for the promise;
  let isFullfilled = false,
    isRejected = false,
    isCalled = false;
  let value;

  // resolve method
  function resolve(val) {
    value = val;
    isFullfilled = true;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
  }

  // reject method
  function reject(err) {
    value = err;
    isRejected = true;
    if (typeof onReject === "function" && !isCalled) {
      onReject(value);
      isCalled = true;
    }
  }

  this.then = function (funct) {
    onResolve = funct;
    if (isFullfilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (funct) {
    onReject = funct;
    if (isRejected && !isCalled) {
      onReject(value);
      isCalled = true;
    }
    return this;
  };

  try {
    callback(resolve, reject);
  } catch (e) {
    reject(e);
  }
};

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey! my Promise has been resolved");
  }, 3000);
});

promise.then((res) => {
  console.log({ res });
});
