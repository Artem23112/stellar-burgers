import type { IngredientInfo } from "@/assets/mock/ingredients";
import { ModalLayout } from "@/components/layout/modal-layout/modal-layout";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import type { FC } from "react";
import s from "./ingredient-details-modal.module.css";

type PropsT = {
  ingredientInfo: IngredientInfo;
  isOpen: boolean;
  onClick: () => void;
};

export const IngredientDetailsModal: FC<PropsT> = ({
  ingredientInfo,
  isOpen,
  onClick,
}) => {
  const { image_large, name, calories, proteins, fat, carbohydrates } =
    ingredientInfo;

  return (
    <ModalLayout className={clsx(s.content)} isOpen={isOpen} onClose={onClick}>
      <div className={s.header}>
        <h2 className={"text_type_main-large"}>Детали ингредиента</h2>
        <button type="button" onClick={onClick}>
          <CloseIcon type="primary" />
        </button>
      </div>
      <img src={image_large} alt={name} />
      <ul className={clsx(s.additionalInfo, "text_color_inactive")}>
        <li>
          <p>Калории,ккал</p>
          <span className="text_type_digits-default">{calories}</span>
        </li>
        <li>
          <p>Белки, г</p>
          <span className="text_type_digits-default">{proteins}</span>
        </li>
        <li>
          <p>Жиры, г</p>
          <span className="text_type_digits-default">{fat}</span>
        </li>
        <li>
          <p>Углеводы, г</p>
          <span className="text_type_digits-default">{carbohydrates}</span>
        </li>
      </ul>
    </ModalLayout>
  );
};
