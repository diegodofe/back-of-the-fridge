import {PlusCircleOutlined} from "@ant-design/icons";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {useState} from "react";
import Ingredient from "./Ingreditent";

function IngredientsList({
  ingredients,
  setIngredients,
  onGenerateRecipe,
}: {
  ingredients: string[],
  setIngredients: (ingredients: string[]) => void,
  onGenerateRecipe: (ingredients: string[]) => void;
}) {
  // const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState<string>("");
  const [ref] = useAutoAnimate<HTMLElement>();

  const disableSubmit = ingredients.length === 0;

  const handleDeleteIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    // If newIngredient contains a comma, split it into multiple ingredients
    if (newIngredient.includes(",") && newIngredient.length > 0) {
      const newIngredients = newIngredient.split(",");
      // Remove empty strings
      newIngredients.filter((ingredient) => ingredient !== "");

      // trim any whitespace
      newIngredients.map((ingredient) => ingredient.trim());

      // Remove duplicates
      const uniqueIngredients = newIngredients.filter(
        (ingredient, index) => newIngredients.indexOf(ingredient) === index
      );

      setIngredients([...ingredients, ...newIngredients]);
      setNewIngredient("");
    } else if (newIngredient.length > 0) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient("");
    }
  };

  const handleGenerateRecepit = () => {
    onGenerateRecipe(ingredients);
  };

  return (
    <div ref={ref} className="ingredients-page">
      <h2 className="ingredients-page__title">Input your ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={ingredient}
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
          placeholder="e.g: pasta, tomato, spinach, etc..."
        />
        <div style={{width: "5px"}} />
        <button
          className="add-ingredient-form__button"
          type="submit"
          onClick={handleAddIngredient}
          value={newIngredient}
        >
          <PlusCircleOutlined />
          <div style={{width: "5px"}} />
          Add
        </button>
      </form>
      <button
        disabled={disableSubmit}
        className={disableSubmit ? "button-disabled" : "button-enabled"}
        onClick={handleGenerateRecepit}
      >
        Generate Recipe
      </button>
    </div>
  );
}

export default IngredientsList;
