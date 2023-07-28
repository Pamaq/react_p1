import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Conent = () => {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "lalaalal" },
    { id: 2, checked: false, item: "item 2" },
    { id: 3, checked: false, item: "item 3" },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };
  // const [count, setCount] = useState(0);

  // const handleNameChange = () => {
  //   const names = ["Bob", "Kevin", "Dave"];
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int]);
  // };

  // const handleClick = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   console.log(count);
  // };

  // const handleClick2 = () => {
  //   console.log(count);
  // };

  // const handleClick3 = (e) => {
  //   console.log(e);
  // };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              ></FaTrashAlt>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
    // <main>
    //   <p onDoubleClick={handleClick}>Hello {name}!</p>
    //   <button onClick={handleClick}>Click me!</button>
    //   <button onClick={handleNameChange}>Change name</button>
    //   <button onClick={handleClick}>Click it</button>
    // <button onClick={handleClick2 }>  lick 2</button>
    // </main>
  );
};

export default Conent;
