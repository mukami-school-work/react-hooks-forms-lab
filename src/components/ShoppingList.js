import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [state, setstate] = useState({
    query: '',
    list: []
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    const results = items.filter(item => {
      if (event.target.value === "") return items;
      return item.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setstate({
      query: event.target.value,
      list: results
    })
  }

  const itemsToDisplay = items.filter((item) => {

    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;   
    
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} state={state.query}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {(state.query === '' ? "" : state.list.map(item => {
          return <Item key={item.name} name={item.name} category={item.category} />
          }))}
      </ul>
    </div>
  );
}

export default ShoppingList;
