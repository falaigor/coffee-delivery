import { Payment } from "./components/Payment";
import { DeliveryAddress } from "./components/DeliveryAddress";

import { Billing, CheckoutContainer, Order } from "./styles";
import { FormProvider, useForm } from "react-hook-form";

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

        <Order>
          <h3>Cafés selecionados</h3>
        </Order>
      </FormProvider>
    </CheckoutContainer>
  );
}
