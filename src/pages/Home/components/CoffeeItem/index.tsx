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

import { Coffee } from "../../../../context/CoffeesContext";

export function CoffeeItem({ title, description, tags, value, image }: Coffee) {
  const [quantity, setQuantity] = useState(0);

  return (
    <CoffeeItemContainer>
      <img src={image} alt={description} />
      <Tags>
        {tags.map((t) => (
          <Tag>{t}</Tag>
        ))}
      </Tags>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <BuyInfo>
        <Pricing>
          R$ <span>{value}</span>
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
