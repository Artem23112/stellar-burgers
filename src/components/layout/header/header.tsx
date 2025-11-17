import { NavButton } from "@/components/ui/nav-button/nav-button";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import s from "./header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={clsx(s.wrapper, "container")}>
        <nav className={clsx(s.navigation, s.left)}>
          <NavButton icon={<BurgerIcon type="primary" />}>
            Конструктор
          </NavButton>
          <NavButton icon={<ListIcon type="primary" />}>
            Лента заказов
          </NavButton>
        </nav>
        <a className={clsx(s.center)} href="/">
          <Logo />
        </a>
        <nav className={clsx(s.navigation, s.right)}>
          <NavButton icon={<ProfileIcon type="primary" />}>
            Личный кабинет
          </NavButton>
        </nav>
      </div>
    </header>
  );
};
