export const debouncing = (funct, delay) => {
  let timmer;
  console.log("funct");
  return function (...args) {
    if (timmer) clearTimeout(timmer);
    timmer = setTimeout(() => {
      funct.apply(this, args);
    }, delay);
  };
};

const debouncingMethod = () => {
  console.log("Hello Sushma");
};
const calling = debouncing(debouncingMethod, 2000);
calling();
calling();
calling();
calling();
calling();

export const throughtling = (funct, delay) => {
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

const throughtlingMethod = () => {
  console.log("Hello Sushma");
};
const throughtlingcalling = throughtling(throughtlingMethod, 2000);
throughtlingcalling();
throughtlingcalling();
throughtlingcalling();
throughtlingcalling();
throughtlingcalling();
