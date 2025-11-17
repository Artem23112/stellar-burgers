import type { IngredientInfo } from "@/assets/mock/ingredients";
import { IngredientCard } from "@/components/ui/ingredient-card/ingredient-card";
import s from "./ingredients-category.module.css";

type Props = {
  categoryName: string;
  ingredientsListByCategory: IngredientInfo[];
};

export const IngredientsCategory: React.FC<Props> = ({
  categoryName,
  ingredientsListByCategory,
}) => {
  return (
    <div>
      <h3 className="text_type_main-medium">{categoryName}</h3>
      <ul className={s.ingredientsList}>
        {ingredientsListByCategory.map((ingredientInfo) => (
          <li key={ingredientInfo._id}>
            <IngredientCard ingredientInfo={ingredientInfo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
