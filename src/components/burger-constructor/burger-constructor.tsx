import { CustomScroll } from "@/components/ui/custom-scroll/custom-scroll";
import { OrderModal } from "@/components/ui/modals/order-modal/order-modal";
import type { BurgerConfig } from "@/pages/home-page/chosen-ingredients";
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
  burgerConfiguration: BurgerConfig;
};

export const BurgerConstructor: React.FC<Props> = ({ burgerConfiguration }) => {
  const { bun, filling } = burgerConfiguration;
  const [isModalOpened, setIsModalOpened] = useState(false);

  function toggleModal() {
    setIsModalOpened((prev) => !prev);
  }

  return (
    <div className="pl-4 pr-4">
      <OrderModal isOpen={isModalOpened} handleClick={toggleModal} />
      <ul className={clsx(s.list, "mb-10")}>
        <li className={s.elementWrapper} key={bun._id + "top"}>
          <DragIcon type="primary" />
          <ConstructorElement
            extraClass={s.element}
            handleClose={() => {}}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
            isLocked={true}
          />
        </li>
        <CustomScroll>
          {filling.map((ingredientInfo) => (
            <li className={s.elementWrapper} key={ingredientInfo._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                extraClass={s.element}
                handleClose={() => {}}
                text={ingredientInfo.name}
                price={ingredientInfo.price}
                thumbnail={ingredientInfo.image_mobile}
                isLocked={false}
              />
            </li>
          ))}
        </CustomScroll>
        <li className={s.elementWrapper} key={bun._id + "bottom"}>
          <DragIcon type="primary" />
          <ConstructorElement
            extraClass={s.element}
            handleClose={() => {}}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
            isLocked={true}
          />
        </li>
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
