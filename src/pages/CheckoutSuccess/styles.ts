import styled from "styled-components";

export const CheckoutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;
  gap: 0.8rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 700;

    color: ${(props) => props.theme["yellow-700"]};
  }

  p {
    font-size: 1.1rem;
  }
`;

export const Resume = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: 2.5rem;
  padding: 2.5rem;
  gap: 2rem;

  border: 2px solid transparent;
  border-radius: 6px 36px;
  background: linear-gradient(
        ${(props) => props.theme["background"]},
        ${(props) => props.theme["background"]}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["purple-500"]},
        ${(props) => props.theme["yellow-500"]}
      )
      border-box;
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const ICON_COLORS = {
  yellow: "yellow-500",
  "yellow-dark": "yellow-700",
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

  p {
    font-size: 1rem;
  }
`;
