import type { IngredientInfo } from "@/assets/mock/ingredients";
import { IngredientCard } from "@/components/ui/ingredient-card/ingredient-card";
import { IngredientDetailsModal } from "@/components/ui/modals/ingredient-details-modal/ingredient-details-modal";
import { PortalModal } from "@/components/utils/portal/portal-modal";
import { useState } from "react";
import s from "./ingredients-category.module.css";

type Props = {
  categoryName: string;
  ingredientsListByCategory: IngredientInfo[];
};

type ModalState = {
  ingredientInfo: IngredientInfo | null;
  isOpen: boolean;
};

export const IngredientsCategory: React.FC<Props> = ({
  categoryName,
  ingredientsListByCategory,
}) => {
  const [modalState, setModalState] = useState<ModalState>({
    ingredientInfo: null,
    isOpen: false,
  });

  function toggleModal(id: IngredientInfo | null = null) {
    setModalState((prev) => ({
      ingredientInfo: id,
      isOpen: !prev.isOpen,
    }));
  }

  return (
    <div>
      <h3 className="text_type_main-medium">{categoryName}</h3>
      {modalState.isOpen && (
        <PortalModal>
          <IngredientDetailsModal
            ingredientInfo={modalState.ingredientInfo!}
            onClick={toggleModal}
          />
        </PortalModal>
      )}
      <ul className={s.ingredientsList}>
        {ingredientsListByCategory.map((ingredientInfo) => (
          <li key={ingredientInfo._id}>
            <IngredientCard
              ingredientInfo={ingredientInfo}
              onClick={() => toggleModal(ingredientInfo)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
