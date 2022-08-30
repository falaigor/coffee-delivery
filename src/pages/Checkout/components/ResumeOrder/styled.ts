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
