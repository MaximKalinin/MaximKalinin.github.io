import React from 'react';
import styled from 'styled-components';

const TaskPanelEl = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: lightgray;
  border-top: outset 3px;
  border-bottom: outset 3px;
`;

const MenuButton = styled.button`
  background: lightgray;
  height: 100%;
  width: 100px;
  border: 3px outset #bfbfbf;
  font-family: VT323, sans-serif;
  font-size: 25px;
`;

export const TaskPanel = () => {
  return (
    <TaskPanelEl>
      <MenuButton>меню</MenuButton>
    </TaskPanelEl>
  );
};