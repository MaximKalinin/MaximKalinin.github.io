// @flow
import styled from 'styled-components';

export const Button = styled.div`
  border: 5px groove lightgray;
  padding: 5px 20px;
  background: lightgray;
  cursor: pointer;
  user-select: none;
  font-family: VT323, sans-serif;
  &:active {
    background: grey;
  }
`;

export const SmallButton = styled.div`
  border: 3px outset;
  margin: 0 10px;
  padding: 0 3px;
  background: lightgray;
  cursor: pointer;
  user-select: none;
  font-family: VT323, sans-serif;
  &:active {
    background: grey;
  }
`;