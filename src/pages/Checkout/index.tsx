import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { CartContext } from "../../context/CartContext";

import { Payment } from "./components/Payment";
import { DeliveryAddress } from "./components/DeliveryAddress";
import { ResumeOrder } from "./components/ResumeOrder";

import { Billing, CheckoutContainer } from "./styles";
interface NewOrderFormData {
  cep: string;
  address: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  uf: string;
  paymentMethod: string;
}

export function Checkout() {
  const navigate = useNavigate();
  const { createNewOrder } = useContext(CartContext);
  const newOrderForm = useForm<NewOrderFormData>({
    defaultValues: {
      cep: "",
      address: "",
      complement: "",
      district: "",
      city: "",
      uf: "",
      paymentMethod: "",
    },
  });

  const { handleSubmit, reset } = newOrderForm;

  function handleCreateNewOrder(data: NewOrderFormData) {
    createNewOrder(data);
    reset();
    navigate("/checkout/success");
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
        <FormProvider {...newOrderForm}>
          <Billing>
            <h3>Complete seu pedido</h3>
            <DeliveryAddress />
            <Payment />
          </Billing>

          <ResumeOrder />
        </FormProvider>
      </form>
    </CheckoutContainer>
  );
}
