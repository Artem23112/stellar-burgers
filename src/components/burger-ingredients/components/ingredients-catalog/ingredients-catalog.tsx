import type { IngredientInfo } from "@/assets/mock/ingredients";
import { IngredientsCategory } from "@/components/burger-ingredients/components/ingredients-category/ingredients-category";
import type { FC } from "react";
import SimpleBar from "simplebar-react";
import s from "./ingredients-catalog.module.css";

type Props = {
  ingredientsList: IngredientInfo[];
};

export const IngredientsCatalog: FC<Props> = ({ ingredientsList }) => {
  const bunList = ingredientsList.filter(({ type }) => type === "bun");
  const mainList = ingredientsList.filter(({ type }) => type === "main");
  const sauceList = ingredientsList.filter(({ type }) => type === "sauce");

  return (
    <div className={s.catalog}>
      <SimpleBar
        style={{ maxHeight: "700px" }}
        forceVisible="y"
        autoHide={false}
      >
        <IngredientsCategory
          categoryName="Булки"
          ingredientsListByCategory={bunList}
        />
        <IngredientsCategory
          categoryName="Соусы"
          ingredientsListByCategory={sauceList}
        />
        <IngredientsCategory
          categoryName="Начинки"
          ingredientsListByCategory={mainList}
        />
      </SimpleBar>
    </div>
  );
};
