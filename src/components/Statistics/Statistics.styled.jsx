import styled from 'styled-components';

export const Wrapper = styled.section`
  border-radius: 6px;
  box-shadow: 1px 2px 6px 2px #515357;
  width: 340px;

  text-align: center;
  overflow: hidden;
`;

export const Title = styled.h2`
  color: rgb(51, 51, 51);
  font-weight: 700;
  padding: 20px;
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Item = styled.li`
  color: #fff;
  -webkit-text-stroke: 0.3px #000;
  padding: 15px 0;
`;

export const Label = styled.span`
  display: block;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-weight: 500;
`;
