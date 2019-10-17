import styled from 'styled-components';

const MainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 0;
  height: ${({ marginTop }) => (marginTop && `calc(100% - ${marginTop}px)`) || '100%'};
  margin-top: ${({ marginTop }) => (marginTop && `${marginTop}px`) || '0'};
  transition: background-color 0.3s;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(rgba(255, 255, 255, 0) 0, white 100%);
    content: '';
    display: block;
    transform: translateY(-100%);
  }
`;

export default MainBackground;