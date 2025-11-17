import { ingredientsInfo } from "@/assets/mock/ingredients";
import { IngredientsCatalog } from "@/components/burger-ingredients/components/ingredients-catalog/ingredients-catalog";
import { Tabs } from "@/components/burger-ingredients/components/tabs/tabs";
import { useState } from "react";

type Props = {
  className?: string;
};

export const BurgerIngredients: React.FC<Props> = ({ className }) => {
  const [currentTabId, setCurrentTabId] = useState(1);

  return (
    <div className={className} style={{ maxWidth: "600px", width: "100%" }}>
      <Tabs
        className="mb-10"
        activeTabId={currentTabId}
        changeActiveTab={setCurrentTabId}
      />
      <IngredientsCatalog ingredientsList={ingredientsInfo} />
    </div>
  );
};
