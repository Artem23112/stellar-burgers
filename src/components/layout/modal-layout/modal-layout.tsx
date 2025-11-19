import clsx from "clsx";
import { useEffect, type FC } from "react";
import s from "./modal-layout.module.css";

type PropsT = {
  className?: string;
  children: React.ReactElement;
  onClose?: () => void;
};

export const ModalLayout: FC<PropsT> = ({
  className = "",
  children,
  onClose,
}) => {
  useEffect(() => {
    function handleKeydownEvent(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      onClose?.();
    }

    document.addEventListener("keydown", handleKeydownEvent);

    return () => {
      document.removeEventListener("keydown", handleKeydownEvent);
    };
  }, [onClose]);

  function safeClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target !== e.currentTarget) return;
    onClose?.();
  }

  return (
    <div className={s.background} onClick={(e) => safeClick(e)}>
      <div className={clsx(s.contentWrapper, className)}>{children}</div>
    </div>
  );
};
