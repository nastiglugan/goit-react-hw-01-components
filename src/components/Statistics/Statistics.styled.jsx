import styled from '@emotion/styled';
import getRandomHexColor from '../../utils/randomColor';

export const Section = styled.section`
  width: 300px;
  background-color: #f5f1f1;
  text-align: center;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

// let bgColor = getRandomHexColor();

export const Item = styled.li`
  width: 40px;
  display: flex;
  flex-direction: column;
  /* background-color: ${getRandomHexColor()}; */
  padding: 13px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 15px;
  font-weight: bold;
`;
