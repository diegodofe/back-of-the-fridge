import React from 'react'
import Ingredient from './Ingreditent';

function IngredientsList() {

  const [ingredients, setIngredients] = React.useState<string[]>([])
  const [newIngredient, setNewIngredient] = React.useState<string>('')

  const handleDeleteIngredient = (index: number) => {
    const newIngredients = [...ingredients]
    newIngredients.splice(index, 1)
    setIngredients(newIngredients)
  }

  const handleAddIngredient = () => {
    setIngredients([...ingredients, newIngredient])
    setNewIngredient('')
  }

  const handleAddIngredientForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <Ingredient 
            // eslint-disable-next-line react/no-array-index-key
            key={index}  
            index={index}
            ingredient={ingredient}
            handleDeleteIngredient={handleDeleteIngredient}
          />
        ))}
      </ul>
      <form onSubmit={handleAddIngredientForm}>
      <input type="text"
        onChange={(e) => {
          setNewIngredient(e.target.value)
        }}
        value={newIngredient}
      />
      <button
        type="submit"
        onClick={handleAddIngredient}
        value={newIngredient}
      >
        Add Ingredient
      </button>
      </form>
    </div>
  );
}

export default IngredientsList;