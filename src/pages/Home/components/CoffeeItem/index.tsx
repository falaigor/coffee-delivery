import { useContext } from "react";
import { ShoppingCart } from "phosphor-react";
import {
  Actions,
  BuyInfo,
  Checkout,
  CoffeeItemContainer,
  Pricing,
  Tag,
  Tags,
} from "./styles";
import { Coffee } from "../../../../store/data";
import { CartContext } from "../../../../context/CartContext";
import { QuantityButton } from "../../../../components/QuantityButton";

export function CoffeeItem({
  id,
  title,
  description,
  tags,
  value,
  image,
}: Coffee) {
  const { addItemToCart } = useContext(CartContext);

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
          <QuantityButton itemId={id} />

          <Checkout onClick={() => addItemToCart(id)}>
            <ShoppingCart weight="fill" size={22} />
          </Checkout>
        </Actions>
      </BuyInfo>
    </CoffeeItemContainer>
  );
}
