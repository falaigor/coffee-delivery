import styled from "styled-components";

export const CoffeesContainer = styled.section`
  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
`;

export const CoffeesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: flex-start;

  margin-top: 2rem;
`;

export const CoffeeItem = styled.div`
  max-width: 16rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.2rem;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  gap: 0.8rem;

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 0.8rem;
    color: ${(props) => props.theme["base-label"]};
    margin-bottom: 1rem;
  }

  img {
    margin-top: -2rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export const Tag = styled.span`
  font-size: 0.6rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  text-transform: uppercase;

  color: ${(props) => props.theme["yellow-500"]};
  background-color: ${(props) => props.theme["yellow-100"]};
`;

export const BuyInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.6rem;
`;

export const Pricing = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.8rem;

  span {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
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
  }
`;

export const Checkout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["purple-700"]};

  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
`;
