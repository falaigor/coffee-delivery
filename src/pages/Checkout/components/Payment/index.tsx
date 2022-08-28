import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Label } from "../../styles";
import { PaymentContainer, PaymentMethods } from "./styles";

export function Payment() {
  return (
    <PaymentContainer>
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
    </PaymentContainer>
  );
}
