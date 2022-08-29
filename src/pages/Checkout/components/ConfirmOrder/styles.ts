import styled from "styled-components";

export const ConfirmOrderContainer = styled.div`
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
