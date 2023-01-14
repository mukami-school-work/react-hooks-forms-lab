import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import Item from "./Item";



function ItemForm(props) {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [array, setArray] = useState([]);
  const [errors, setErrors] = useState([]);

  // function handleProductChange(event) {
  //   setProduct(event.target.value);
  // }

  // function handleCategoryChange(event) {
  //   setCategory(event.target.value);
  // }

  function addElement() {
    if (product.length > 0) {
      const formData = {product, category}
      setArray([...array, formData]);
      setProduct("");
      setCategory("");
      setErrors([]);
    } else {
      setErrors(["Product name is required!"]);
    }
  }

  const listOfSubmissions = array.map((data, index) => {

        <Item key={index} name={data.product} category={data.category}/>
  
  });

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: product,
    category: category,
  };
  

  function handleSubmit(event) {
    event.preventDefault();

    addElement(listOfSubmissions)
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={product} onChange={(e) => setProduct(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
