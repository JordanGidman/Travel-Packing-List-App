import React from "react";
import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      {/* we are using controlled components here to keep these inputs in sync with the state. to make this work we must pass the num as a value to each option as shown below on the option declaration */}
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {/* Make an empty array with a length of 20 then fill it with numbers from 1 - 20 */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item... "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
