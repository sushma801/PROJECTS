import React, { useEffect, useState } from "react";
const suggestionsList = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Strawberry",
  "Pineapple",
  "Grapes",
];

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {
    if (query.trim() === "") {
      setFilter([]);
      setIsOpen(false);
      return;
    }
    const res = suggestionsList.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilter(res);
    setIsOpen(true);
  }, [query]);
  const handleKeyDown = (e) => {
    // console.log(e);
    switch (e.key) {
      case "ArrowDown": {
        setActiveIndex((prev) => (prev < filter.length - 1 ? prev + 1 : prev));
        break;
      }
      case "ArrowUp": {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      }
      case "Enter": {
        if (activeIndex >= 0) {
          setQuery(filter[activeIndex]);
        }
        setIsOpen(false);
        break;
      }
      case "Escape": {
        setIsOpen(false);
        break;
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActiveIndex(-1);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {isOpen && filter.length > 0 && (
        <ul>
          {filter.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setQuery(item);
                setIsOpen(false);
              }}
              style={{ background: index === activeIndex ? "green" : "red" }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
