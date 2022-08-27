import { useState } from "react";
import {
  Actions,
  BuyInfo,
  Checkout,
  CoffeeItem,
  CoffeesContainer,
  CoffeesList,
  Pricing,
  QuantityAction,
  Tag,
  Tags,
} from "./styles";

import expressoTradicionalUrl from "../../../../assets/coffees/exp_tradicional.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function Coffees() {
  const [quantity, setQuantity] = useState(0);

  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>

      <CoffeesList>
        <CoffeeItem>
          <img src={expressoTradicionalUrl} alt="" />
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
        </CoffeeItem>
      </CoffeesList>
    </CoffeesContainer>
  );
}
