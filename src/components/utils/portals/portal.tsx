import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  target: Element;
};

export const Portal: React.FC<Props> = ({ children, target }) => {
  return createPortal(children, target);
};
