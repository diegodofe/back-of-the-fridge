import { PlusCircleOutlined } from "@ant-design/icons";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import Ingredient from "./Ingreditent";

function IngredientsList({
  onGenerateRecipe,
}: {
  onGenerateRecipe: () => void;
}) {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState<string>("");
  const [ref] = useAutoAnimate<HTMLElement>();

  const handleDeleteIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    if (newIngredient.length > 0) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  };

  return (
    <>
      <div ref={ref} className="ingredients-page">
        <h2 className="ingredients-page__title">Input your ingredients</h2>
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
          className="add-ingredient-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="add-ingredient-form__input"
            type="text"
            onChange={(e) => {
              setNewIngredient(e.target.value);
            }}
            value={newIngredient}
            placeholder="e.g: apple, onion, etc..."
          />
          <div style={{ width: "5px" }} />
          <button
            className="add-ingredient-form__button"
            type="submit"
            onClick={handleAddIngredient}
            value={newIngredient}
          >
            <PlusCircleOutlined />
            <div style={{ width: "5px" }} />
            Add
          </button>
        </form>
        <button className="generate-button" onClick={onGenerateRecipe}>
          Generate Recipe
        </button>
      </div>
    </>
  );
}

export default IngredientsList;
