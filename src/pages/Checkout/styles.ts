import styled from "styled-components";

export const CheckoutContainer = styled.section`
  display: flex;
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
  flex-basis: 58%;

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

export const DeliveryAddress = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
  gap: 2rem;

  svg {
    color: ${(props) => props.theme["yellow-500"]};
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
  gap: 2rem;

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.8rem;

  button {
    width: 100%;
    max-width: 11rem;

    display: flex;
    align-items: center;

    text-transform: uppercase;
    border: 0;
    border-radius: 6px;
    padding: 1rem;

    font-size: 0.7rem;

    gap: 0.8rem;
    cursor: pointer;

    color: ${(props) => props.theme["base-text"]};
    background-color: ${(props) => props.theme["base-button"]};

    &.active {
      border: 1px solid ${(props) => props.theme["purple-500"]};
      background-color: ${(props) => props.theme["purple-100"]};
    }
  }
`;

export const Order = styled.div``;
