import styled from "styled-components";

export const Main = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 5%;
`;

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;


`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8ecf2;
  border-radius: 1rem;
  width: 300px;
  height: 180px;
  position: relative;
  align-items: flex-start;
  justify-content: center;
`;

export const CardsItem = styled.li`
  display: flex;
  padding: 1rem;
  cursor: pointer;
`;

export const CardIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 0;
  margin: 0.5rem;
  top: 0;
  border-radius: 1rem;
`;
export const CardTitle = styled.h4`
  position: absolute;
  top: 30px;
  color: #656565;
  left: 10px;
`;
export const CardInfoNumber = styled.h1`
  position: absolute;
  left: 10px;
`;
export const CardInfoContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
  left: 10px;
`;
export const CardNumber = styled.div`
  color: #07d4ff;
`;
export const CardTextInfo = styled.div`
  color: #656565;
`;
