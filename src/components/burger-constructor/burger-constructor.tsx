import { type IngredientInfo } from "@/assets/mock/ingredients";
import { OrderModal } from "@/components/ui/modals/order-modal/order-modal";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import { useState } from "react";
import s from "./burger-constructor.module.css";

type Props = {
  chosenIngredients: IngredientInfo[];
};

export const BurgerConstructor: React.FC<Props> = ({
  chosenIngredients: chosenIngredientsList,
}) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function toggleModal() {
    setIsModalOpened((prev) => !prev);
  }

  return (
    <div className="pl-4 pr-4">
      <OrderModal isOpen={isModalOpened} handleClick={toggleModal} />
      <ul className={clsx(s.list, "mb-10")}>
        {chosenIngredientsList.map((ingredientInfo, ind) => {
          let type;
          if (ind === 0) type = "top";
          if (ind === chosenIngredientsList.length - 1) type = "bottom";

          return (
            <li className={s.elementWrapper} key={ingredientInfo._id + type}>
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
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={toggleModal}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
