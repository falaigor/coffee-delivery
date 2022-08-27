import styled from "styled-components";

export const HeroContainer = styled.section`
  padding: 7rem 0;
  width: 100%;

  display: flex;
  align-items: stretch;
  justify-content: space-between;

  gap: 3rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.4rem;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const ICON_COLORS = {
  yellow: "yellow-500",
  "yellow-dark": "yellow-700",
  gray: "base-text",
  purple: "purple-500",
} as const;

interface StatusProps {
  color: keyof typeof ICON_COLORS;
}

export const Icon = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme[ICON_COLORS[props.color]]};
  }
`;

export const CoffeesContainer = styled.section`
  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
`;

export const CoffeesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1.2rem;
  justify-content: flex-start;

  margin-top: 2rem;
`;
