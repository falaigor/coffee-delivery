import styled from "styled-components";

export const CheckoutContainer = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 2.5rem 0;
  gap: 0.8rem;

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
  }
`;

export const Billing = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  p {
    &.title {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    &.description {
      font-size: 0.87rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const Label = styled.div`
  display: flex;
  gap: 0.8rem;
`;
