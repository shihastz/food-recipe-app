import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = (props) => {
  const { label, image, url, ingredients } = props.recipe.recipe;
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("Show");

  const toggleHandler = () => {
    setToggle(!toggle)
    setText(text === "Show" ? "Hide" : "Show")
  }
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        More
      </a>
      <button onClick={toggleHandler}> {text} Ingredients</button>
      {toggle ? <RecipeDetails ingredients={ingredients} /> : null}
    </div>
  );
};

export default Recipe;
