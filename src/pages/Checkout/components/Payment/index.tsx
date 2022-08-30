import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { Label } from "../../styles";
import { PaymentContainer, PaymentMethods } from "./styles";

export function Payment() {
  const { register, watch } = useFormContext();
  const payment = watch("paymentMethod");

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
        <label className={payment === "Cartão de Crédito" ? "active" : ""}>
          <CreditCard size={16} /> Cartão de Crédito
          <input
            id="payment"
            className="full"
            type="radio"
            value="Cartão de Crédito"
            {...register("paymentMethod")}
          />
        </label>

        <label className={payment === "Cartão de Débito" ? "active" : ""}>
          <Bank size={16} /> Cartão de Débito
          <input
            id="payment"
            className="full"
            type="radio"
            value="Cartão de Débito"
            {...register("paymentMethod")}
          />
        </label>

        <label className={payment === "Dinheiro" ? "active" : ""}>
          <Money size={16} /> Dinheiro
          <input
            id="payment"
            className="full"
            type="radio"
            value="Dinheiro"
            {...register("paymentMethod")}
          />
        </label>
      </PaymentMethods>
    </PaymentContainer>
  );
}
