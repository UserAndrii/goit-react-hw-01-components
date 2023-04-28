import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 6px;
  box-shadow: 1px 2px 6px 2px #515357;
  width: 340px;

  text-align: center;
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 25px 15px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;

  border: 1px solid #c1c1c1;
  border-radius: 25%;

  padding-top: 10px;
  margin-bottom: 10px;
`;

export const Name = styled.h2`
  color: #333;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Tag = styled.p`
  color: #b54545;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background-color: #f3f6f9;
  border-top: 1px solid #e3e3e3;
`;

export const Item = styled.li`
  padding: 15px 0;

  :not(:last-child) {
    border-right: 1px solid #e3e3e3;
  }
`;

export const Label = styled.span`
  color: #7b7b7b;
  display: block;
  font-weight: 700;
  margin-bottom: 5px;
`;
