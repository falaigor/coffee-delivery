import { useContext } from "react";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { CartContext } from "../../context/CartContext";
import { CheckoutContainer, Icon, Resume } from "./styles";

import deliveryImage from "../../assets/delivery.svg";

export function CheckoutSuccess() {
  const { order } = useContext(CartContext);

  const address1 = `${order.address}, ${order.number}, ${order.complement}`;
  const address2 = `${order.district} - ${order.city}, ${order.uf}`;

  return (
    <CheckoutContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <Resume>
          <Icon color="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <p>
                Entrega em <strong>{address1}</strong>
              </p>
              <p>{address2}</p>
            </div>
          </Icon>

          <Icon color="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </Icon>

          <Icon color="yellow-dark">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <p>Pagamento na entrga</p>
              <p>
                <strong>{order.paymentMethod}</strong>
              </p>
            </div>
          </Icon>
        </Resume>
      </div>

      <img src={deliveryImage} />
    </CheckoutContainer>
  );
}
