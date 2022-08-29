import { Trash } from "phosphor-react";
import { ConfirmOrder } from "../ConfirmOrder";
import { QuantityButton } from "../../../../components/QuantityButton";

import {
  Actions,
  CartListItem,
  Order,
  Remove,
  ResumeContainer,
} from "./styled";

import expresso from "../../../../assets/coffees/expresso.png";

export function ResumeOrder() {
  return (
    <ResumeContainer>
      <h3>Cafés selecionados</h3>
      <Order>
        <div>
          <CartListItem>
            <img src={expresso} alt="" />
            <div>
              <p>Expresso tradicional</p>
              <Actions>
                <QuantityButton />

                <Remove onClick={() => console.log("remove")}>
                  <Trash size={22} /> Remover
                </Remove>
              </Actions>
            </div>
            <p>
              <strong>R$ 9,90</strong>
            </p>
          </CartListItem>

          <hr />
        </div>

        <ConfirmOrder />
      </Order>
    </ResumeContainer>
  );
}
