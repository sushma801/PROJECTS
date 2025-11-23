import React, { useState } from "react";
import { URL } from "../App";

// const list = [];
const InputBox = ({ handleSetListOfItem }) => {
  const [inputText, setInputText] = useState("");
  const debouncing = (funct, delay) => {
    let timmer;
    return function (...args) {
      if (timmer) return;
      timmer = setTimeout(() => {
        funct.apply(this, args);
      }, delay);
    };
  };
  // const debouncingSideEffect = () =>
  //   debouncing((value) => {
  //     setInputText(value);
  //   }, 500);
  const handleInputText = (e) => {
    // console.log(e);
    setInputText(e.target.value);
    // debouncingSideEffect(e.target.value);
  };
  const handleDebounceInputText = (e) => debouncing(handleInputText(e), 2000);
  const handleAddButton = () => {
    if (!inputText) return;
    const value = {
      text: inputText,
      id: new Date().getTime(),
    };
    // list.push(value);
    console.log(value);

    // after push the value inputtext is empty
    setInputText("");
    handleSetListOfItem((prev) => [...prev, value]);
  };
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => handleDebounceInputText(e)}
      />
      <button onClick={handleAddButton}>Add</button>
    </div>
  );
};
const ListViewItems = ({ id, text, list, handleUpdate }) => {
  const handleDeleteItem = (id) => {
    console.log(id, list);
    const items = list.filter((item) => id !== item.id);
    // console.log({ items });
    handleUpdate([...items]);
  };
  return (
    <div key={id}>
      {text}
      <button onClick={() => handleDeleteItem(id)}>delete</button>
    </div>
  );
};

const ToDoApp = () => {
  const [listOfItem, setListOfItem] = useState([]);
  const [serverData, setServerData] = useState({});
  const handleFetch = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log({ data });
    const result = { status: response.status, data };
    setServerData(result);
  };
  return (
    <div>
      <InputBox handleSetListOfItem={setListOfItem} />
      {listOfItem.length > 0 &&
        listOfItem.map(({ id, text }) => (
          <ListViewItems
            id={id}
            text={text}
            list={listOfItem}
            handleUpdate={setListOfItem}
          />
        ))}

      <button onClick={handleFetch}>Fetch the user Data</button>
      {serverData.status === 200 &&
        serverData.data.map((data) => <div key={data.id}>{data.name}</div>)}
    </div>
  );
};

export default ToDoApp;
