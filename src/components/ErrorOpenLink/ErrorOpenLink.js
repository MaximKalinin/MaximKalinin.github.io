import React from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';
import { HeaderBar } from '../HeaderBar/HeaderBar';

const ERROR_ID = fp.uniqueId();

const ErrorEl = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px groove lightgray;
  background: white;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.5);
  max-width: 30%;
  display: none;
  &.opened {
    display: block;
  }
`;

const ErrorContent = styled.div`
  padding: 10px;
  font-family: VT323, sans-serif;
`;

const OkayButton = styled.div`
  border: 5px groove lightgray;
  padding: 5px 20px;
  background: lightgray;
  cursor: pointer;
  font-family: VT323, sans-serif;
  &:active {
    background: grey;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ErrorOpenLink = props => {
  const { setSelection, isOpen, close } = props;
  return (
    <ErrorEl onClick={ () => setSelection(ERROR_ID) } className={ isOpen ? 'opened' : '' }>
      <HeaderBar buttons={ {
        close
      } } />
      <ErrorContent>
        Couldn't execute file. The file is damaged or system has no corresponding program to open it. Ask your system administrator for help.
        <br />
        <Buttons>
          <OkayButton onClick={ close }>OK</OkayButton>
        </Buttons>
      </ErrorContent>
    </ErrorEl>
  );
};