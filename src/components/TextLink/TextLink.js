import styled from 'styled-components';

const TextLink = styled.button`
  border: none;
  &:focus {
    outline: none;
  }
  font-size: ${({ size }) => size || '1rem'};
  &.active {
    font-weight: 700;
    color: black;
    border-bottom-color: transparent;
  }
  color: #ff5600;
  border-bottom: 1px dashed #ff5600;
  padding: 0;
  margin: 10px;
  background: none;
  cursor: pointer;
`;

export default TextLink;
