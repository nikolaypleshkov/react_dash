import styled from "styled-components";

export const Main = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`;
export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  
`;
export const CardsItem = styled.li`
  display: flex;
  padding: 1rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
`;
export const CardContainer = styled.div`
  background-color: #E8ECF2;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CardTitle = styled.h1`
  color: rgb(75, 75, 75);
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin: 0.5rem;
`;
