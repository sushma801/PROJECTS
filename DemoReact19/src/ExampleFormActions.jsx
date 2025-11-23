import React from "react";
import { debouncing } from "./pollyfills/Debouncing";

const ExampleFormActions = () => {
  const debouncingMethod = () => {
    console.log("Hello Sushma");
  };
  debouncing(debouncingMethod, 2000);
  debouncing(debouncingMethod, 2000);
  debouncing(debouncingMethod, 2000);
  debouncing(debouncingMethod, 2000);
  debouncing(debouncingMethod, 2000);
  return <div></div>;
};

export default ExampleFormActions;
