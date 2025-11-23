import React, { useEffect, useState } from "react";
import { URL } from "../App";

const SearchFilter = () => {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [doFetch, setdoFetch] = useState(true);
  //   const [filteredData]
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const responseDate = await response.json();
      setUsers(responseDate);
      setdoFetch(false);
    };
    doFetch && fetchData();
  }, [doFetch]);
  const handleSearchText = (e) => {
    // const searchText = e.target.value;
    // if (e.target.value == "") setdoFetch(true);
    setSearchInput(e.target.value);
    // add validation for min 3 char
    if (e.target.value.length < 3) {
      console.log("Error");
      setdoFetch(true);
    } else {
      handlesearchButton(e.target.value);
    }
    // console.log({ searchText, data });
  };
  const handlesearchButton = (str) => {
    if (!str) setdoFetch(true);
    const newUsers = [...users];
    const filterData = newUsers.filter((user) =>
      user.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())
    );
    console.log(filterData);
    setUsers(filterData);
  };
  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => handleSearchText(e)}
      />
      {/* <button onClick={handlesearchButton}>search</button> */}
      {users.length && users.map((user) => <div>{user.name}</div>)}
    </div>
  );
};

export default SearchFilter;
