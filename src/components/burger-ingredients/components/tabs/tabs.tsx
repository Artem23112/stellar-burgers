import { tabsConfig } from "@/components/burger-ingredients/components/tabs/tabs-configs";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import clsx from "clsx";
import s from "./tabs.module.css";

type PropsT = {
  className?: string;
  activeTabId: number;
  changeActiveTab: React.Dispatch<React.SetStateAction<number>>;
};

export const Tabs: React.FC<PropsT> = ({
  className = "",
  activeTabId,
  changeActiveTab,
}) => {
  return (
    <ul className={clsx(s.tabsWrapper, className)}>
      {tabsConfig.map((tab) => (
        <li key={tab.id}>
          <Tab
            value={tab.id}
            active={tab.id === activeTabId}
            onClick={changeActiveTab}
          >
            {tab.text}
          </Tab>
        </li>
      ))}
    </ul>
  );
};
