import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { Label } from "../../styles";
import { DeliveryAddressContainer, Form } from "./styles";

export function DeliveryAddress() {
  const { register } = useFormContext();

  return (
    <DeliveryAddressContainer>
      <Label>
        <MapPinLine size={22} />
        <div>
          <p className="title">Endereço de Entrega</p>
          <p className="description">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </Label>

      <Form>
        <input id="cep" type="text" placeholder="CEP" {...register("cep")} />
        <input
          id="address"
          className="full"
          type="text"
          placeholder="Rua"
          {...register("address")}
        />
        <input
          id="number"
          type="text"
          placeholder="Número"
          {...register("number")}
        />
        <input
          id="complement"
          className="mid"
          type="text"
          placeholder="Complemento"
          {...register("complement")}
        />
        <input
          id="district"
          type="text"
          placeholder="Bairro"
          {...register("district")}
        />
        <input
          id="city"
          type="text"
          className="mid"
          placeholder="Cidade"
          {...register("city")}
        />
        <input
          id="uf"
          type="text"
          maxLength={2}
          placeholder="UF"
          className="small"
          {...register("uf")}
        />
      </Form>
    </DeliveryAddressContainer>
  );
}
