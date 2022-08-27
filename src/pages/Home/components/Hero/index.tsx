import { HeroContainer, Icon, Icons, Title, Wrapper } from "./styles";

import coffeeUrl from "../../../../assets/coffee.png";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

export function Hero() {
  return (
    <HeroContainer>
      <Wrapper>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <Icons>
          <Icon color="yellow-dark">
            <span>
              <ShoppingCart size={16} weight="fill" />{" "}
            </span>
            Compra simples e segura
          </Icon>

          <Icon color="gray">
            <span>
              <Package size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </Icon>

          <Icon color="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </Icon>

          <Icon color="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </Icon>
        </Icons>
      </Wrapper>
      <img src={coffeeUrl} alt="Xicara de Cafe" />
    </HeroContainer>
  );
}
