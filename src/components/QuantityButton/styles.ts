import styled from "styled-components";

export const QuantityButtonContainer = styled.div`
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
