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
import SimpleBar from "simplebar-react";
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
      <div className={s.burgerContainer}>
        <div className={s.elementWrapper}>
          <DragIcon type="primary" />
          <ConstructorElement
            extraClass={s.element}
            handleClose={() => {}}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
            isLocked={true}
          />
        </div>
        <SimpleBar style={{ maxHeight: "464px" }} autoHide={false}>
          <ul className={clsx(s.list)}>
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
          </ul>
        </SimpleBar>
        <div className={s.elementWrapper}>
          <DragIcon type="primary" />
          <ConstructorElement
            extraClass={s.element}
            handleClose={() => {}}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
            isLocked={true}
          />
        </div>
      </div>
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
