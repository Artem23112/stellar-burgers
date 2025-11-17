import { BurgerConstructor } from "@/components/burger-constructor/burger-constructor";
import { BurgerIngredients } from "@/components/burger-ingredients/burger-ingredients";
import s from "./home-page.module.css";

export const HomePage = () => {
  return (
    <main>
      <div className="container">
        <h2 className="text_type_main-large mb-5">Соберите бургер</h2>
        <section className={s.burgerAssembly}>
          <BurgerIngredients />
          <BurgerConstructor />
        </section>
      </div>
    </main>
  );
};
