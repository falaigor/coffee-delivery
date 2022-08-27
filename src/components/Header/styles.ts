import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 0.75rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-700"]};
`;

export const CheckoutButton = styled.a`
  background-color: ${(props) => props.theme["yellow-100"]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;

  color: ${(props) => props.theme["yellow-700"]};

  transition: all 0.2s ease-in;
  position: relative;

  span {
    position: absolute;
    top: -7px;
    right: -7px;
    padding: 0.2rem 0.4rem;

    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 100px;

    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["yellow-700"]};
  }

  :hover {
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["yellow-500"]};
  }
`;
