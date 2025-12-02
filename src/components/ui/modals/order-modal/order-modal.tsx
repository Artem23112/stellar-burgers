import { ModalLayout } from "@/components/layout/modal-layout/modal-layout";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";

type Props = {
  isOpen: boolean;
  handleClick: () => void;
};
import s from "./order-modal.module.css";

export const OrderModal: FC<Props> = ({ isOpen, handleClick }) => {
  if (!isOpen) return null;
  return (
    <ModalLayout
      className={s.contentWrapper}
      isOpen={isOpen}
      onClose={handleClick}
    >
      <div className={s.orderInfo}>
        <h2 className="text_type_digits-large mb-8">034536</h2>
        <h4 className="text_type_main-medium mb-15">идентификатор заказа</h4>
        <img src="/order-success.png" alt="Success" />
        <p className="text_type_main-default mt-15">
          Ваш заказ начали готовить
        </p>
        <span className="text_type_main-default text_color_inactive  mb-2">
          Дождитесь готовности на орбитальной станции
        </span>
      </div>

      <button className={s.closeBtn} onClick={handleClick}>
        <CloseIcon type="primary" />
      </button>
    </ModalLayout>
  );
};
