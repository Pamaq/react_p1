import React from "react";

const Conent = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handleClick = () => {
    console.log("Click!");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={() => handleClick2("Dave")}>Click for name!</button>
    </main>
  );
};

export default Conent;
