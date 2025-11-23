import { Suspense, useContext, useState } from "react";

import "./App.css";
import ExampleofUseHook from "./ExampleofUseHook";
import ExampleFormActions from "./ExampleFormActions";
import CounterApp from "./Components/CounterApp";
import ToDoApp from "./Components/ToDoApp";
import SearchFilter from "./Components/SearchFilter";
import ModalRender from "./Components/Modal";
import { ThemeContext } from "./Components/ThemeContext";
import AutoComplete from "./Components/AutoComplete";

export const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [count, setCount] = useState(0);
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  return (
    <div className={`${theme == "light" ? "light" : "dark"}`}>
      {/* <Suspense fallback={<h1>Data is loading</h1>}>
        <ExampleofUseHook />
      </Suspense> */}
      {/* <ExampleFormActions /> */}
      {/* <CounterApp /> */}
      {/* <ToDoApp /> */}
      {/* <ToDoApp />
      <SearchFilter /> */}
      <button onClick={handleTheme}>
        {theme == "light" ? "light" : "dark"}
      </button>
      {/* <ModalRender /> */}
      <AutoComplete />
    </div>
  );
}

export default App;
