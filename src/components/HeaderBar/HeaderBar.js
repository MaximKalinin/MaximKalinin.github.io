import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background: lightgray;
  padding: 5px;
  user-select: none;
  & > div {
    display: block;
    cursor: pointer;
    margin-left: 5px;
    height: 1.5rem;
    width: 1.5rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    border: 5px groove;
  }
  .close {
    background: red;
  }
  .close:focus {
    background: darkred;
  }
  .full-screen {
    background: green;
  }
  .full-screen:focus {
    background: darkgreen;
  }
  .hide {
    background: yellow; 
  }
  .hide:focus {
    background: #a0a000;
  }
`;

export const HeaderBar = props => {
  const { buttons } = props;
  return (
    <HeaderWrapper>
      { buttons.close && <div className="close" onClick={ buttons.close }>×</div> }
      { buttons.fullScreen && <div className="full-screen" onClick={ buttons.fullScreen }>▣</div> }
      { buttons.hide && <div className="hide" onClick={ buttons.hide }>-</div> }
    </HeaderWrapper>
  );
}