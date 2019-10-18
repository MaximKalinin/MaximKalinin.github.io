// @flow
import fp from 'lodash/fp';
import { GRID_SIZE } from './consts';

export const setSelectionByEvent = setSelection => fp.flow([
  fp.property('currentTarget.id'),
  setSelection
]);

export const getCoordinate = (maxCoordinate: number) => fp.flow([fp.floor, fp.clamp(0, maxCoordinate / GRID_SIZE)]);