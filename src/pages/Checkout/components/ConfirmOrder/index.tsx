import { ConfirmOrderContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

export function ConfirmOrder() {
  const { subTotal, delivery, total } = useContext(CartContext);

  return (
    <ConfirmOrderContainer>
      <div>
        <p>Total de itens</p>
        <p>
          {subTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div>
        <p>Entrega</p>
        <p>
          {delivery.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div className="total">
        <p>Total</p>
        <p>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <button type="submit">Confrimar Pedido</button>
    </ConfirmOrderContainer>
  );
}
