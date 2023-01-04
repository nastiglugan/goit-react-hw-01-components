import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  background-color: #f5f1f1;
  text-align: center;
  margin: 0 auto;
`;

export const Description = styled.div`
  padding: 30px;
  color: gray;
  margin-bottom: 10px;
`;

export const Username = styled.p`
  color: #000000f5;
  font-weight: bold;
  font-size: 20px;
`;

export const Picture = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  background-color: #c2cfd2;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
