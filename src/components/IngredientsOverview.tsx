import { DeleteFilled, PlusCircleOutlined } from "@ant-design/icons";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

function Ingredient({
  ingredient,
  onDeleteClick,
}: {
  ingredient: string;
  onDeleteClick: () => void;
}) {
  const [mouseIsIn, setMouseIsIn] = useState(false);
  const [ref] = useAutoAnimate<HTMLElement>();

  return (
    <div
      ref={ref}
      className="ingredient-item"
      onMouseEnter={() => setMouseIsIn(true)}
      onMouseLeave={() => setMouseIsIn(false)}
    >
      <div className="ingredient-item__text">{ingredient}</div>
      {mouseIsIn && (
        <button
          type="button"
          className="ingredient-item__button"
          onClick={onDeleteClick}
        >
          <DeleteFilled className="trash-icon" />
        </button>
      )}
    </div>
  );
}

function IngredientsForm({
  onIngredientSubmit,
}: {
  onIngredientSubmit: (newIngredient: string) => void;
}) {
  const [inputtedIngredient, setInputtedIngredient] = useState("");

  const handleSubmit = () => {
    onIngredientSubmit(inputtedIngredient);
    setInputtedIngredient("");
  };

  return (
    <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
      <input
        className="add-ingredient-form__input"
        type="text"
        onChange={(e) => {
          setInputtedIngredient(e.target.value);
        }}
        value={inputtedIngredient}
        placeholder="e.g: pasta, tomato, spinach, etc..."
      />

      <button
        className="add-ingredient-form__button"
        type="submit"
        onClick={handleSubmit}
        value={inputtedIngredient}
      >
        <PlusCircleOutlined className="mr-4" />
        Add
      </button>
    </form>
  );
}

export default function IngredientsOverview({
  onGenerateRecipe,
}: {
  onGenerateRecipe: (ingredients: string[]) => void;
}) {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ref] = useAutoAnimate<HTMLElement>();

  const disableSubmit = ingredients.length === 0;

  const handleDeleteIngredient = (index: number) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = (newIngredient: string) => {
    if (newIngredient.length === 0) return;

    const isMultipleIngredients = newIngredient.includes(",");

    if (isMultipleIngredients) {
      const newIngredients = newIngredient
        .split(",")
        .map((ingredient) => ingredient.trim())
        .filter((ingredient) => ingredient !== "");

      const allIngredients = ingredients.concat(newIngredients);

      const uniqueIngredients = allIngredients.filter(
        (item, idx) => allIngredients.indexOf(item) === idx
      );

      setIngredients(uniqueIngredients);
    } else {
      const ingredientAlreadyExists = ingredients.includes(newIngredient);

      if (ingredientAlreadyExists) return;

      setIngredients([...ingredients, newIngredient]);
    }
  };

  return (
    <div ref={ref}>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={ingredient + index.toString()}
          ingredient={ingredient}
          onDeleteClick={() => handleDeleteIngredient(index)}
        />
      ))}

      <IngredientsForm onIngredientSubmit={handleAddIngredient} />

      <button
        disabled={disableSubmit}
        className={disableSubmit ? "button-disabled" : "button-enabled"}
        onClick={() => onGenerateRecipe(ingredients)}
      >
        Generate Recipe
      </button>
    </div>
  );
}
