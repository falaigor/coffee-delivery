import { Payment } from "./components/Payment";
import { DeliveryAddress } from "./components/DeliveryAddress";

import {
  Actions,
  Billing,
  CartListItem,
  CheckoutContainer,
  Order,
  QuantityAction,
  Remove,
  ResumeContainer,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { Minus, Plus, Trash } from "phosphor-react";

interface NewOrderFormData {
  cep: string;
  address: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  uf: string;
  paymentMethod: string;
  subTotal: number;
  delivery: number;
  total: number;
}

import expresso from "../../assets/coffees/expresso.png";

export function Checkout() {
  const newOrder = useForm<NewOrderFormData>({
    defaultValues: {
      cep: "",
      address: "",
      complement: "",
      district: "",
      city: "",
      uf: "",
      paymentMethod: "",
      subTotal: 0,
      delivery: 3.5,
      total: 0,
    },
  });

  return (
    <CheckoutContainer>
      <FormProvider {...newOrder}>
        <Billing>
          <h3>Complete seu pedido</h3>
          <DeliveryAddress />
          <Payment />
        </Billing>

        <ResumeContainer>
          <h3>Cafés selecionados</h3>
          <Order>
            <CartListItem>
              <img src={expresso} alt="" />
              <div>
                <p>Expresso tradicional</p>
                <Actions>
                  <QuantityAction>
                    <button onClick={() => console.log("decrement")}>
                      <Minus weight="bold" />
                    </button>
                    <span>1</span>
                    <button onClick={() => console.log("increment")}>
                      <Plus weight="bold" />
                    </button>
                  </QuantityAction>

                  <Remove onClick={() => console.log("remove")}>
                    <Trash size={22} /> Remover
                  </Remove>
                </Actions>
              </div>
              <p>
                <strong>R$ 9,90</strong>
              </p>
            </CartListItem>

            <hr />
          </Order>
        </ResumeContainer>
      </FormProvider>
    </CheckoutContainer>
  );
}
