import React from "react";
import Grocery from "./Grocery";
import GroceryDelete from "./GroceryDelete";
 
const List = ({name, items, groceryClick, removeItem}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {items.map(item => 
        <Grocery 
          key={item.id} {...item} 
          groceryClick={groceryClick} 
          removeItem={removeItem}
        >
        </Grocery>
      )}
    </ul>
  </div>
)

export default List;