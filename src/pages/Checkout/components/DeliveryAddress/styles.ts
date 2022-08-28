import styled from "styled-components";

export const DeliveryAddressContainer = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  input {
    font-size: 0.8rem;
    color: ${(props) => props.theme["base-text"]};

    padding: 0.7rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background-color: ${(props) => props.theme["base-input"]};

    :focus {
      border: 1px solid ${(props) => props.theme["yellow-700"]};
    }

    ::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
