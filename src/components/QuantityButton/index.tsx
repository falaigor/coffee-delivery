import { Minus, Plus } from "phosphor-react";
import { QuantityButtonContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

interface QuantityButtonProps {
  itemId: string | undefined;
}

export function QuantityButton({ itemId }: QuantityButtonProps) {
  const { cart, increaseCoffeeQuantityByOne, decreaseCoffeeQuantityByOne } =
    useContext(CartContext);

  const cartCoffee = cart.find((c) => c.coffeeId === itemId);

  return (
    <QuantityButtonContainer>
      <button onClick={() => decreaseCoffeeQuantityByOne(itemId)}>
        <Minus weight="bold" />
      </button>
      <span>{cartCoffee?.quantity ?? 0}</span>
      <button onClick={() => increaseCoffeeQuantityByOne(itemId)}>
        <Plus weight="bold" />
      </button>
    </QuantityButtonContainer>
  );
}
