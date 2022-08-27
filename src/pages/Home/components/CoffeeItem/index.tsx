import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  Actions,
  BuyInfo,
  Checkout,
  CoffeeItemContainer,
  Pricing,
  QuantityAction,
  Tag,
  Tags,
} from "./styles";

import coffe from "../../../../assets/coffees/expresso.png";

export function CoffeeItem() {
  const [quantity, setQuantity] = useState(0);
  return (
    <CoffeeItemContainer>
      <img src={coffe} alt="" />
      <Tags>
        <Tag>Tradicional</Tag>
        <Tag>Com leite</Tag>
      </Tags>

      <div>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>

      <BuyInfo>
        <Pricing>
          R$ <span>9,90</span>
        </Pricing>

        <Actions>
          <QuantityAction>
            <button onClick={() => setQuantity(quantity - 1)}>
              <Minus weight="bold" />
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>
              <Plus weight="bold" />
            </button>
          </QuantityAction>

          <Checkout>
            <ShoppingCart weight="fill" size={22} />
          </Checkout>
        </Actions>
      </BuyInfo>
    </CoffeeItemContainer>
  );
}
