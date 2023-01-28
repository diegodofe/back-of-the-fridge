import React from 'react'

interface IngredientProps {
  index: number;
  ingredient: string;
  handleDeleteIngredient : (index: number) => void;
}

function Ingredient({index, ingredient, handleDeleteIngredient} : IngredientProps) {

    return (
        <div style={{ 
          border: '1px solid black',
          margin: 8,
          padding: 8  
        }} >
          {ingredient}
          <button type='button' 
          onClick={() => handleDeleteIngredient(index)}>
            Delete</button>
        </div>
    )
}

export default Ingredient;