import { Trash } from "phosphor-react";
import { useContext } from "react";
import { QuantityButton } from "../../../../components/QuantityButton";
import { CartContext } from "../../../../context/CartContext";
import { coffees } from "../../../../store/data";
import { Actions, CartListItem, Remove } from "./styles";

export function CartItem() {
  const { cart, removeItemCart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => {
        const coffee = coffees.find((coffee) => coffee.id === item.coffeeId);

        const pricing = coffee?.value.toLocaleString("pt-br", {
          minimumFractionDigits: 2,
        });

        return (
          <div key={item.id}>
            <CartListItem>
              <img src={coffee?.image} alt={coffee?.description} />
              <div>
                <p>{coffee?.title}</p>
                <Actions>
                  <QuantityButton itemId={coffee?.id} />

                  <Remove
                    type="button"
                    onClick={() => removeItemCart(coffee?.id)}
                  >
                    <Trash size={22} /> Remover
                  </Remove>
                </Actions>
              </div>
              <p>
                <strong>{pricing}</strong>
              </p>
            </CartListItem>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
