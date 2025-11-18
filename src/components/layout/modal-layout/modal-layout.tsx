import type { FC } from "react";
import s from "./modal-layout.module.css";
import clsx from "clsx";

type PropsT = { className?: string; children: React.ReactElement };

export const ModalLayout: FC<PropsT> = ({ className = "", children }) => {
  return (
    <div className={s.background}>
      <div className={clsx(s.contentWrapper, className)}>{children}</div>
    </div>
  );
};
