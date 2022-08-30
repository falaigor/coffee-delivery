import { CheckoutButton, HeaderContainer, Location } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";

import logoUrl from "../../assets/logo.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <a href="/">
        <img
          src={logoUrl}
          alt="Icone de uma caneca de café com o escrito 'Coffe Delivery'"
        />
      </a>

      <div>
        <Location>
          <MapPin weight="fill" size={22} />
          Leme, SP
        </Location>

        <CheckoutButton href="/checkout">
          {cart.length > 0 && <span>{cart.length}</span>}
          <ShoppingCart weight="fill" size={22} />
        </CheckoutButton>
      </div>
    </HeaderContainer>
  );
}
