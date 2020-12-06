import React from 'react'

const RecipeDetails = ({ingredients}) => {
    return ingredients.map((ing, index) => (
        <ul key={index} className="ingredient-list">
            <li className="ingredient-text">{ing.text}</li>
            <li className="ingredient-weight">Weight - {ing.weight}</li>
        </ul>
    ))
}

export default RecipeDetails
