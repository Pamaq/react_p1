import React from "react";
import { useState } from "react";

const Conent = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  };

  // const handleClick3 = (e) => {
  //   console.log(e);
  // };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleNameChange}>Change name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>click 2</button>
    </main>
  );
};

export default Conent;
