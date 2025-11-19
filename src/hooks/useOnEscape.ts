import { useEffect } from "react";

export const useOnEscape = (handleEscape: () => void) => {
  useEffect(() => {
    const handleKeydownEvent = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      handleEscape?.();
    };
    document.addEventListener("keydown", handleKeydownEvent);

    return () => document.removeEventListener("keydown", handleKeydownEvent);
  }, [handleEscape]);
};
