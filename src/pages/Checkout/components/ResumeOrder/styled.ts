import styled from "styled-components";

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

export const ConfirmOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  div {
    display: flex;
    justify-content: space-between;

    &.total {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  button {
    border: 0;
    border-radius: 6px;
    padding: 0.8rem;

    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;

    cursor: pointer;

    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["yellow-500"]};

    transition: all 0.2s ease-in;

    :hover {
      background-color: ${(props) => props.theme["yellow-700"]};
    }
  }
`;
