import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  height: auto;
  align-self: center;
  &.cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -3;
  }
`;

export default Image;