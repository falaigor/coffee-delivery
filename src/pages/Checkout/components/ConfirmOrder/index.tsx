import { ConfirmOrderContainer } from "./styles";

export function ConfirmOrder() {
  return (
    <ConfirmOrderContainer>
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
    </ConfirmOrderContainer>
  );
}
