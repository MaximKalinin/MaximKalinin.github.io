import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TASK_PANEL_HEIGHT } from "../../consts";


const TaskPanelEl = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${TASK_PANEL_HEIGHT}px;
  box-sizing: border-box;
  background: lightgray;
  border-top: outset 3px;
  border-bottom: outset 3px;
  display: flex;
  justify-content: space-between;
  & > * {
    font-family: VT323, sans-serif;
    font-size: 25px;
  }
`;

const MenuButton = styled.button`
  background: lightgray;
  height: 100%;
  width: 100px;
  border: 3px outset #bfbfbf;
  cursor: pointer;
  user-select: none;
`;

const TimeTrackerEl = styled.div`
  height: calc(100% - 10px);
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
  border-left: 1px solid grey;
`;

const getDayTime = () => `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

const MenuEl = styled.div`
  position: fixed;
  bottom: ${TASK_PANEL_HEIGHT}px;
  left: 0;
  max-width: 400px;
  padding: 10px
  height: 100px;
  background: white;
  visibility: hidden;
  &.open {
  visibility: visible;
`;

const TimeTracker = () => {
  const [time, setTime] = useState(getDayTime());
  useEffect(() => {
    const update = () => setTime(getDayTime());
    const timeout = setTimeout(update, 1000);
    return () => clearTimeout(timeout);
  }, [time]);
  return (
    <TimeTrackerEl>{ time }</TimeTrackerEl>
  );
};

export const TaskPanel = () => {
  const [menu, setMenu] = useState(false);
  return (
    <TaskPanelEl>
      <MenuButton onClick={() => setMenu(!menu)}>menu</MenuButton>
      <TimeTracker />
      <MenuEl className={menu ? 'open' : ''}>this is menu</MenuEl>
    </TaskPanelEl>
  );
};
