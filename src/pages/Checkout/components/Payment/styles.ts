import styled from "styled-components";

export const PaymentContainer = styled.div`
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 0.8rem;

  label {
    width: 100%;
    max-width: 11rem;

    display: flex;
    align-items: center;

    text-transform: uppercase;
    border: 0;
    border-radius: 6px;
    padding: 1rem;

    font-size: 0.7rem;

    cursor: pointer;

    color: ${(props) => props.theme["base-text"]};
    background-color: ${(props) => props.theme["base-button"]};

    svg {
      margin-right: 0.8rem;
    }

    &.active {
      border: 1px solid ${(props) => props.theme["purple-500"]};
      background-color: ${(props) => props.theme["purple-100"]};
    }

    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
`;
