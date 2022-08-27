import { CheckoutButton, HeaderContainer, Location } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";

import logoUrl from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoUrl}
        alt="Icone de uma caneca de café com o escrito 'Coffe Delivery'"
      />

      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          Leme, SP
        </Location>

        <CheckoutButton>
          <ShoppingCart weight="fill" size={22} />
        </CheckoutButton>
      </div>
    </HeaderContainer>
  );
}
