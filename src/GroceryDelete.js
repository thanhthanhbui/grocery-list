import React from "react";

const GroceryDelete = ({id, name, removeItem}) => (
  <button
    onClick={() => removeItem(id)}
    >
      {name}
  </button>
)

export default GroceryDelete;
