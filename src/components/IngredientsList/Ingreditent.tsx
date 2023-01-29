import {DeleteFilled} from '@ant-design/icons';
import React from 'react';

interface IngredientProps {
  index: number;
  ingredient: string;
  handleDeleteIngredient: (index: number) => void;
}

function Ingredient({index, ingredient, handleDeleteIngredient}: IngredientProps) {

  const [mouseIsIn, setMouseIsIn] = React.useState<boolean>(false);

  const handleMouseEnter = () => {
    setMouseIsIn(true);
  };

  const handleMouseLeave = () => {
    setMouseIsIn(false);
  };

  return (
    <div className='ingredient-item' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='ingredient-item__text'>
        {ingredient}
      </div>
      {mouseIsIn &&
        <button type='button'
          className='ingredient-item__button'
          onClick={() => handleDeleteIngredient(index)}>
          <DeleteFilled className='trash-icon' />
        </button>
      }
    </div>
  );
}

export default Ingredient;