import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  width: 300px;
  background-color: #f9f9f9;
  padding: 15px;
  gap: 10px;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 300;
`;

const setBgColor = props => {
  const color1 = 'green';
  const color2 = 'red';
  return props.type ? color1 : color2;
};

export const Status = styled.span`
  margin-right: 50px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${setBgColor};
`;
