import styled from 'styled-components';

const Text = styled.div`
  max-width: 920px;
  margin: auto;
  display: flex;
  flex-direction: column;
  color: ${({ white }) => (white && 'white') || 'black'};
  transition: color 0.3s;
  padding: 0 10px;
  padding-top: ${({ marginTop }) => (marginTop && `${marginTop}px`) || '100px'};
  padding-bottom: 70px;
  & > p {
    font-family: 'Merriweather', serif;
  }
  position: relative;
  z-index: 1;
`;

export default Text;