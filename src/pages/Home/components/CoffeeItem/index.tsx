import { useContext, useState } from "react";
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
import { Coffee } from "../../../../store/data";
import { CartContext } from "../../../../context/CartContext";

export function CoffeeItem({
  id,
  title,
  description,
  tags,
  value,
  image,
}: Coffee) {
  const {
    cart,
    addItemToCart,
    increaseCoffeeQuantityByOne,
    decreaseCoffeeQuantityByOne,
  } = useContext(CartContext);

  const cartCoffee = cart.find((c) => c.coffeeId === id);

  console.log(cart);
  const [quantity, setQuantity] = useState(1);

  const pricing = value.toLocaleString("pt-br", { minimumFractionDigits: 2 });

  return (
    <CoffeeItemContainer>
      <img src={image} alt={description} />
      <Tags>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </Tags>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <BuyInfo>
        <Pricing>
          R$ <span>{pricing}</span>
        </Pricing>

        <Actions>
          <QuantityAction>
            <button onClick={() => decreaseCoffeeQuantityByOne(id)}>
              <Minus weight="bold" />
            </button>
            <span>{cartCoffee?.quantity ?? 1}</span>
            <button onClick={() => increaseCoffeeQuantityByOne(id)}>
              <Plus weight="bold" />
            </button>
          </QuantityAction>

          <Checkout onClick={() => addItemToCart(id)}>
            <ShoppingCart weight="fill" size={22} />
          </Checkout>
        </Actions>
      </BuyInfo>
    </CoffeeItemContainer>
  );
}
