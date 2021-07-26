import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    //evita que se recarga la pagina
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      setCategories((categoriesE) => [inputValue, ...categoriesE]);
      setInputValue("");
    }
  };
  
  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Add Category</h2>
      <input id="icategoria" type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
