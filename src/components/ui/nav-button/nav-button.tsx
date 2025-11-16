import clsx from "clsx";
import s from "./nav-button.module.css";

type Props = {
  icon: React.ReactElement;
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const NavButton: React.FC<Props> = ({
  className = "",
  icon,
  children,
  ...attr
}) => {
  return (
    <a className={clsx(s.link, className)} {...attr}>
      {icon}
      {children}
    </a>
  );
};
