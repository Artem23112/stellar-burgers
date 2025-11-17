import type { IngredientInfo } from "@/assets/mock/ingredients";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import s from "./ingredient-card.module.css";

type Props = { ingredientInfo: IngredientInfo };

export const IngredientCard: React.FC<Props> = ({ ingredientInfo }) => {
  return (
    <button className={s.card}>
      {/* <Counter count={ingredientInfo.__v} extraClass={s.counter} /> */}
      <img
        className={s.image}
        src={ingredientInfo.image}
        alt={ingredientInfo.name}
      />
      <span className={clsx(s.price, "text_type_digits-default")}>
        {ingredientInfo.price} <CurrencyIcon type="primary" />
      </span>
      <p className="text_type_main-default">{ingredientInfo.name}</p>
    </button>
  );
};
