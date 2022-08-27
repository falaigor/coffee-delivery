import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Label, PaymentMethods } from "./styles";
import {
  Billing,
  CheckoutContainer,
  Order,
  DeliveryAddress,
  Payment,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <Billing>
        <h3>Complete seu pedido</h3>

        <DeliveryAddress>
          <Label>
            <CurrencyDollar size={22} />
            <div>
              <p className="title">Endereço de Entrega</p>
              <p className="description">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </Label>
        </DeliveryAddress>

        <Payment>
          <Label>
            <CurrencyDollar size={22} />
            <div>
              <p className="title">Pagamento</p>
              <p className="description">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Label>

          <PaymentMethods>
            <button className="active">
              <CreditCard size={16} /> Cartão de Crédito
            </button>
            <button>
              <Bank size={16} /> Cartão de Débito
            </button>
            <button>
              <Money size={16} /> Dinheiro
            </button>
          </PaymentMethods>
        </Payment>
      </Billing>

      <Order>
        <h3>Cafés selecionados</h3>
      </Order>
    </CheckoutContainer>
  );
}
