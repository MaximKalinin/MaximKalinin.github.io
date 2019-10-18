import React, { useState } from 'react';
import styled from 'styled-components';

import { Desktop } from '../components/Desktop/Desktop';
import { TaskPanel } from '../components/TaskPanel/TaskPanel';

const DesktopWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  /* right: 0; */
  width: 100vw;
  min-width: 640px;
  background: blueviolet;
  overflow-x: scroll;
`;

export const Computer = () => {
  const [selection, setSelection] = useState(0);
  return (
    <DesktopWrapper>
      <Desktop selection={ selection } setSelection={ setSelection } />
      <TaskPanel selection={ selection } setSelection={ setSelection } />
    </DesktopWrapper>
  );
};