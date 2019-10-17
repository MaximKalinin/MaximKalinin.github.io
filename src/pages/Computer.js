import React from 'react';
import styled from 'styled-components';

import { Desktop } from '../components/Desktop/Desktop';
import { TaskPanel } from '../components/TaskPanel/TaskPanel';

const DesktopWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: blueviolet;
`;

export const Computer = () => {
  return (
    <DesktopWrapper>
      <Desktop />
      <TaskPanel />
    </DesktopWrapper>
  );
};