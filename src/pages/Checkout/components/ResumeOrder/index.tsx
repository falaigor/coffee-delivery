import { Minus, Plus, Trash } from "phosphor-react";
import {
  Actions,
  CartListItem,
  Order,
  QuantityAction,
  Remove,
  ResumeContainer,
} from "./styled";

import expresso from "../../../../assets/coffees/expresso.png";
import { ConfirmOrder } from "./styled";

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
                <QuantityAction>
                  <button onClick={() => console.log("decrement")}>
                    <Minus weight="bold" />
                  </button>
                  <span>1</span>
                  <button onClick={() => console.log("increment")}>
                    <Plus weight="bold" />
                  </button>
                </QuantityAction>

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

        <ConfirmOrder>
          <div>
            <p>Total de itens</p>
            <p>R$ 9,90</p>
          </div>

          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>

          <div className="total">
            <p>Total</p>
            <p>R$ 9,90</p>
          </div>

          <button>Confrimar Pedido</button>
        </ConfirmOrder>
      </Order>
    </ResumeContainer>
  );
}
