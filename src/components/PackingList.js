import React from "react";
import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  //IT IS ESSENTIAL TO USE SLICE HERE TO MAKE A COPY OF THE ITEMS ARR AS SORT WOULD CHANGE THE ORIGINAL ARRAY WHICH WE DO NOT WANT
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
