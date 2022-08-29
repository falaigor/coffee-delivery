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

export const Billing = styled.form`
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

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px 2.75rem;

  hr {
    margin: 2rem 0;
    border: 1px solid ${(props) => props.theme["base-button"]};
  }
`;

export const CartListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 70px;
    width: 100%;
  }

  p {
    margin-bottom: 0.8rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const QuantityAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${(props) => props.theme["base-button"]};
  gap: 0.2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["base-button"]};

    padding: 0.2rem;
    border: 0;
    color: ${(props) => props.theme["purple-500"]};

    cursor: pointer;

    transition: all 0.2s ease-in;

    :hover {
      color: ${(props) => props.theme["purple-700"]};
    }
  }
`;

export const Remove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-button"]};

  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  cursor: pointer;

  transition: all 0.2s ease-in;

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }

  :hover {
    background-color: ${(props) => props.theme["purple-500"]};
  }
`;
