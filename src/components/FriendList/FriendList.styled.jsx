import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 10px;
  width: 320px;

  border-radius: 6px;
  box-shadow: rgb(81, 83, 87) 1px 2px 6px 2px;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    background-color: #f5bebe;
  }
`;

export const IsOnline = styled.span`
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
  height: 15px;
  width: 15px;
  margin-right: 15px;
`;

export const Name = styled.p`
  color: rgb(51, 51, 51);
  font-weight: 700;
  font-size: 22px;
  margin-left: 35px;
`;
