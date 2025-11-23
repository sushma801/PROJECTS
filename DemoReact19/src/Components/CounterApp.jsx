import React, { useReducer, useState } from "react";

const CounterApp = () => {
  const initialState = {
    counter: 0,
  };
  //   const [counter, setCounter] = useState(0);
  //   const handleIncrement = () => {
  //     setCounter(counter + 1);
  //   };
  //   const handleDecrement = () => {
  //     setCounter(counter - 1);
  //   };
  //   const handleReset = () => {
  //     setCounter(0);
  //   };
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + 1 };
      case "decrement":
        return { counter: state.counter - 1 };
      case "reset":
        return { counter: 0 };
    }
  };
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      {/* {counter} */}
      {state.counter}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterApp;
