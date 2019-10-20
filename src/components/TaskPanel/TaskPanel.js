import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TASK_PANEL_HEIGHT } from "../../consts";
import fp from 'lodash/fp';
import { Calendar } from '../Calendar/Calendar';

const MENU_ID = fp.uniqueId();
const CALENDAR_ID = fp.uniqueId();

const TaskPanelEl = styled.div`
  position: relative;
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
  &:active {
    background: grey;
  }
  &:focus {
    outline: none;
  }
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
  position: relative;
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
  }
`;

const TimeTracker = (props) => {
  const { onClick } = props;
  const [time, setTime] = useState(getDayTime());
  useEffect(() => {
    const update = () => setTime(getDayTime());
    const timeout = setTimeout(update, 1000);
    return () => clearTimeout(timeout);
  }, [time]);
  return (
    <TimeTrackerEl onClick={ onClick }>
      { time }
    </TimeTrackerEl>
  );
};

export const TaskPanel = props => {
  const { selection, setSelection } = props;
  return (
    <TaskPanelEl>
      <MenuButton onClick={ () => setSelection(selection === MENU_ID ? 0 : MENU_ID) }>menu</MenuButton>
      <TimeTracker onClick={ () => setSelection(selection === CALENDAR_ID ? 0 : CALENDAR_ID) } />
      <Calendar locale="en" className={ selection === CALENDAR_ID ? 'open' : '' } />
      <MenuEl className={ selection === MENU_ID ? 'open' : '' }>this is menu</MenuEl>
    </TaskPanelEl>
  );
};
