import { useBodyScrollLock } from "@/hooks/useToggleBodyScroll";
import clsx from "clsx";
import { useEffect, type FC } from "react";
import s from "./modal-layout.module.css";

type Props = {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export const ModalLayout: FC<Props> = ({
  className = "",
  isOpen,
  onClose,
  children,
}) => {
  useBodyScrollLock(isOpen);
  useEffect(() => {
    const handleKeydownEvent = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      onClose?.();
    };
    document.addEventListener("keydown", handleKeydownEvent);

    return () => document.removeEventListener("keydown", handleKeydownEvent);
  }, [onClose]);

  function safeClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) onClose?.();
  }

  return (
    <div className={s.background} onClick={(e) => safeClick(e)}>
      <div className={clsx(s.contentWrapper, className)}>{children}</div>
    </div>
  );
};
