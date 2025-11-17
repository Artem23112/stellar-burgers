import { type IngredientInfo } from "@/assets/mock/ingredients";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import s from "./burger-constructor.module.css";

type Props = {
  chosenIngredients: IngredientInfo[];
};

export const BurgerConstructor: React.FC<Props> = ({
  chosenIngredients: chosenIngredientsList,
}) => {
  return (
    <div>
      <ul className={clsx(s.list, "mb-10")}>
        {chosenIngredientsList.map((ingredientInfo, ind) => {
          let type;
          if (ind === 0) type = "top";
          if (ind === chosenIngredientsList.length - 1) type = "bottom";

          return (
            <li className={s.elementWrapper} key={ingredientInfo._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                extraClass={s.element}
                handleClose={() => {}}
                type={type}
                isLocked={ind === 0 || ind === chosenIngredientsList.length - 1}
                text={ingredientInfo.name}
                price={ingredientInfo.price}
                thumbnail={ingredientInfo.image_mobile}
              />
            </li>
          );
        })}
      </ul>
      <div className={s.order}>
        <p className={"text_type_digits-medium"}>
          5020 <CurrencyIcon type="primary" />
        </p>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
