// @flow
import React, { useState, useEffect } from 'react';
import fp from 'lodash/fp';
import styled from 'styled-components';
import { SmallButton } from '../Button/Button';

const WEEK_DAYS = (locale: 'ru' | 'en') => (locale === 'ru' && [
  'пн',
  'вт',
  'ср',
  'чт',
  'пт',
  'сб',
  'вс'
]) || (locale === 'en' && [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat'
]);

const MONTHS = (locale: 'ru' | 'en') => (locale === 'ru' && [
  'ЯНВ',
  'ФЕВ',
  'МАР',
  'АПР',
  'МАЙ',
  'ИЮН',
  'ИЮЛ',
  'АВГ',
  'СЕН',
  'ОКТ',
  'НОЯ',
  'ДЕК'
]) || (locale === 'en' && [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OKT',
  'NOV',
  'DEC'
]);

const CalendarEl = styled.div`
  position: absolute;
  top: -3px;
  right: 0;
  transform: translateY(-100%);
  border: 3px outset;
  box-shadow: -4px -4px 5px rgba(0, 0, 0, 0.3);
  background: white;
  flex-direction: column;
  display: none;
  height: 300px;
  & * {
    font-size: 20px;
    font-family: VT323,sans-serif;
  }
  &.open {
    display: flex;
  }
  & > .week {
    font: inherit;
    display: flex;
    flex-direction: row;
    & > .day {
      font: inherit;
      width: 40px;
      display: flex;
      justify-content: center;
    }
    & > .today {
      border: 1px solid red;
    }
  }
  & > .controllers {
    background: lightgray;
    font: inherit;
    & > .controller {
      padding: 5px 0;
      display: flex;
      flex-direction: row;
      font: inherit;
      justify-content: space-between;
      align-items: center;
      border-bottom: 3px solid gray;
      & > .button {
        display: flex;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        border: 3px outset;
        flex: 3rem 0 0;
        margin: 0 10px;
      }
    }
  }
`;

export const Calendar = (props) => {
  const { locale, className } = props;
  const [date, setDate] = useState<Date>(new Date());
  const [month, setMonth] = useState(getMonth(locale, date));
  const monthsWithLocale = MONTHS(locale);
  useEffect(() => {
    fp.flow([getMonth, setMonth])(locale, date);
  }, [date]);
  const setPrevMonth = () => fp.flow([
    getNthMonth(date.getMonth() - 1),
    setDate
  ])(date);
  const setNextMonth = () => fp.flow([
    getNthMonth(date.getMonth() + 1),
    setDate
  ])(date);
  const setPrevYear = () => fp.flow([
    getNthYear(date.getFullYear() - 1),
    setDate
  ])(date);
  const setNextYear = () => fp.flow([
    getNthYear(date.getFullYear() + 1),
    setDate
  ])(date);
  return (
    <CalendarEl className={ className }>
      <div className="controllers">
        <div className="controller">
          <SmallButton onClick={ setPrevYear }>⟵</SmallButton>
          <div>{ date.getFullYear() }</div>
          <SmallButton onClick={ setNextYear }>⟶</SmallButton>
        </div>
        <div className="controller">
          <SmallButton onClick={ setPrevMonth }>⟵</SmallButton>
          <div>{ monthsWithLocale[date.getMonth()] }</div>
          <SmallButton onClick={ setNextMonth }>⟶</SmallButton>
        </div>
      </div>
      <div className="week">
        { WEEK_DAYS(locale).map((weekDay: string) => (
          <div className="day" key={ weekDay }>{ weekDay }</div>
        )) }
      </div>
      { month.map((week: Array<number>, index: number) => (
        <div className="week" key={ index }>
          { week.map((day: number, dayIndex: number) => (
            <div className={ day && isToday(getNthDay(day)(date)) ? "day today" : 'day' } key={ `day-${dayIndex}` }>
              { day }
            </div>
          )) }
        </div>
      )) }
    </CalendarEl>
  );
};

const copyDate = fp.flow([
  fp.invoke('toDateString'),
  (date: string) => new Date(date),
]);

const getNthDay: Date = (n: number) => fp.flow([
  copyDate,
  fp.flow([
    fp.invokeArgs,
    fp.tap
  ])('setDate', [n])
]);

const isToday = (date: Date) => {
  const today = new Date();
  return today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear();
}

const getNextDay: Date = fp.flow([
  (date: Date) => [date.getDate() + 1, date],
  ([dateNumber, dateObject]: [number, Date]) => getNthDay(dateNumber)(dateObject)
]);

const getNthMonth: Date = (n: number) => fp.flow([
  getNthDay(1),
  fp.flow([
    fp.invokeArgs,
    fp.tap
  ])('setMonth', [n])
]);

const getNthYear: Date = (n: number) => fp.flow([
  copyDate,
  fp.flow([
    fp.invokeArgs,
    fp.tap
  ])('setYear', [n])
]);

const getWeekDay = (locale: 'en' | 'ru', date: Date) => {
  if (locale === 'en') {
    return date.getDay();
  }
  if (locale === 'ru') {
    return date.getDay() > 0 ? date.getDay() - 1 : 6
  }
}

const getMonth = (locale: 'ru' | 'en', date: Date) => {
  let day = getNthDay(1)(date);
  const getWeekDayWithLocale = fp.partial(getWeekDay, [locale]);
  const withinMonth = () => day.getMonth() === date.getMonth();
  const month = [];
  while (withinMonth()) {
    const week = [];
    for (let i = 0; i < getWeekDayWithLocale(day); i++) {
      week.push(null);
    }
    week.push(day.getDate());
    day = getNextDay(day);
    while (getWeekDayWithLocale(day) !== 0) {
      if (withinMonth()) {
        week.push(day.getDate());
      }
      day = getNextDay(day);
    }
    month.push(week);
  }
  return month;
};
