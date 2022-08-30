import { ConfirmOrder } from "../ConfirmOrder";

import { Order, ResumeContainer } from "./styled";
import { CartItem } from "../CartItem";

export function ResumeOrder() {
  return (
    <ResumeContainer>
      <h3>Cafés selecionados</h3>
      <Order>
        <CartItem />

        <ConfirmOrder />
      </Order>
    </ResumeContainer>
  );
}
