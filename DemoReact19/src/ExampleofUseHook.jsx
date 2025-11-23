import React, { use } from "react";

// import { URL } from "./App";
export const URL = "https://jsonplaceholder.typicode.com/users";
const userPromise = fetch(URL).then((res) => res.json());

const ExampleofUseHook = () => {
  const user = use(userPromise);
  console.log(user);
  return (
    <div>
      {user.map(({ id, name, email }) => {
        return (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        );
      })}
    </div>
  );
};

export default ExampleofUseHook;
