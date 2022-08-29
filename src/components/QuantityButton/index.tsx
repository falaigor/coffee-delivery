import { Minus, Plus } from "phosphor-react";
import { QuantityButtonContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function QuantityButton() {
  const { increaseCoffeeQuantityByOne, decreaseCoffeeQuantityByOne } =
    useContext(CartContext);

  return (
    <QuantityButtonContainer>
      <button onClick={() => console.log("decrement")}>
        <Minus weight="bold" />
      </button>
      <span>1</span>
      <button onClick={() => console.log("increment")}>
        <Plus weight="bold" />
      </button>
    </QuantityButtonContainer>
  );
}
