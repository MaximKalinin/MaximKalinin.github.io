import React from 'react';
import styled from 'styled-components';

import { HeaderBar } from '../HeaderBar/HeaderBar';
import { AppGrid } from '../AppGrid/AppGrid';

const FolderEl = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px groove lightgray;
  background: white;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.5);
  min-height: 600px;
  min-width: 500px;
`;

const FolderContent = styled.div`
  padding: 10px;
  font-family: VT323, sans-serif;
`;

interface IFolderProps {
  labels: ILabel[];
  selection: string;
  setSelection: (selection: string) => void;
}

export const Folder = (props: IFolderProps) => {
  const { close, id, isOpen, setSelection, labels, selection } = props;
  const hide = () => { };
  const fullScreen = () => { };
  if (!isOpen) return null;
  return (
    <FolderEl onClick={ () => setSelection(id) } className={ 'opened' }>
      <HeaderBar buttons={ {
        close,
        hide,
        fullScreen
      } } />
      <AppGrid labels={ labels } selection={ selection } setSelection={ setSelection } />
    </FolderEl>
  );
}