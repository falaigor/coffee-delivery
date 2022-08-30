import styled from "styled-components";

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
    background-color: ${(props) => props.theme["purple-100"]};
  }
`;
