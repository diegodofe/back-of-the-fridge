import React from 'react';
import Ingredient from './Ingreditent';
import {Button, Space} from 'antd';

function IngredientsList() {

  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [newIngredient, setNewIngredient] = React.useState<string>('');

  const handleDeleteIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    if (newIngredient.length > 0) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient('');
    }
  };

  const handleAddIngredientForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='ingredients-page'>
      <h2 className='ingredients-page__title'>Input My Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          index={index}
          ingredient={ingredient}
          handleDeleteIngredient={handleDeleteIngredient}
        />
      ))}
      <form
        className='add-ingredient-form'
        onSubmit={handleAddIngredientForm}

      >
        <input
          className='add-ingredient-form__input'
          type="text"
          onChange={(e) => {
            setNewIngredient(e.target.value);
          }}
          value={newIngredient}
          placeholder="e.g: apple, onion, etc..."
        />
        <div style={{width: '5px'}} />
        <button
          className='add-ingredient-form__button'
          type="submit"
          onClick={handleAddIngredient}
          value={newIngredient}
        >
          Add
        </button>
      </form>
    </div >
  );
}

export default IngredientsList;