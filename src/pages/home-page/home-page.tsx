import { BurgerConstructor } from "@/components/burger-constructor/burger-constructor";
import { BurgerIngredients } from "@/components/burger-ingredients/burger-ingredients";

export const HomePage = () => {
  return (
    <main>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};
