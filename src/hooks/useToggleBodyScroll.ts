import { useLayoutEffect } from "react";

const MODAL_OPENED_CLASSNAME = "modal-opened";

export const useBodyScrollLock = (isLocked: boolean) => {
  useLayoutEffect(() => {
    if (isLocked) {
      document.body.classList.add(MODAL_OPENED_CLASSNAME);
    } else {
      document.body.classList.remove(MODAL_OPENED_CLASSNAME);
    }

    return () => document.body.classList.remove(MODAL_OPENED_CLASSNAME);
  }, [isLocked]);
};
