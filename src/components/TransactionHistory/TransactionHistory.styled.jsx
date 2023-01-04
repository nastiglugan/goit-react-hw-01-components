import styled from '@emotion/styled';

export const Table = styled.table`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  background-color: #fffdfd;
`;

export const Thead = styled.thead`
  background-color: #ddecdd;
  text-transform: uppercase;
  font-size: 12px;
`;

export const Line = styled.tr`
  :nth-child(even) {
    background-color: #d9e3e4;
  }
`;
