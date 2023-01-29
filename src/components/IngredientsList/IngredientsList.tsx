import React from 'react';
import Ingredient from './Ingreditent';
import {Button, Space} from 'antd';
import {useAutoAnimate} from '@formkit/auto-animate/react';
import {PlusCircleOutlined} from '@ant-design/icons';

function IngredientsList() {

  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [newIngredient, setNewIngredient] = React.useState<string>('');
  const [loading, setIsLoading] = React.useState<boolean>(false);
  const [ref] = useAutoAnimate<HTMLElement>();

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

  const handleGenerateRecipe = () => {
    console.log('generate recipe');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('done');
    }, 2000);
  };

  return (
    <React.Fragment>
      <div ref={ref} className='ingredients-page'>
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
            <PlusCircleOutlined />
            <div style={{width: '5px'}} />
            Add
          </button>
        </form>
        <button className='generate-button' onClick={handleGenerateRecipe}>
          Generate Recipe
        </button>
      </div>
    </React.Fragment>
  );
}

export default IngredientsList;