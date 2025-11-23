function myPromise(callback) {
  let onResolve, onReject;
  let isSuccessfull = false,
    isReject = false,
    isCalled = false;
  let value;

  // Resolve function
  function resolve(val) {
    isSuccessfull = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
  }

  // Reject function
  function reject(err) {
    isReject = true;
    value = err;
    if (typeof onReject === "function" && !isCalled) {
      onReject(value);
      isCalled = true;
    }
  }

  // call the then method
  this.then = function (funct) {
    onResolve = funct;
    if (isSuccessfull && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };
  // call catch method
  this.catch = function (funct) {
    onReject = funct;
    if (isReject && !isCalled) {
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
}

const p = new myPromise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Promise complete");
  //   }, 2000);

  setTimeout(() => {
    reject("Promise failed");
  }, 6000);
});

p.then((res) => {
  console.log(res);
}).catch((e) => {
  console.log(e);
});
