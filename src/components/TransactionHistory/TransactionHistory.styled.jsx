import styled from 'styled-components';

export const Table = styled.table`
  width: 340px;
  text-align: center;
  overflow: hidden;

  border-collapse: collapse;
  border-radius: 6px;
  box-shadow: rgb(81, 83, 87) 1px 2px 6px 2px;
`;

export const Thead = styled.thead`
  color: #fff;
  background-color: #6495ed;
  text-transform: uppercase;
`;

export const Th = styled.th`
  border: 1px solid #e3e3e3;
  padding: 10px;
`;

export const Tr = styled.tr`
  :nth-child(2n) {
    background-color: #eaeaea;
  }
`;

export const Td = styled.td`
  text-transform: capitalize;
  color: rgb(129, 129, 129);

  border: 1px solid #e3e3e3;
  padding: 10px;
`;
