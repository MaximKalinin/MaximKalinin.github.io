// @flow
import fp from 'lodash/fp';
import { GRID_SIZE } from './consts';

export const setSelectionByEvent = setSelection => fp.flow([
  fp.property('currentTarget.id'),
  setSelection
]);

export const getCoordinate = (maxCoordinate: number) => fp.flow([
  fp.floor,
  fp.clamp(0, maxCoordinate / GRID_SIZE),
]);

export const call = (func: Function) => (args: any[]) => func.apply(null, args);

export const swap = (a, b) => {
  const c = a;
  a = b;
  b = c;
}

export const swapMatrixCells = (x1, y1, x2, y2) => fp.flow([
  fp.cloneDeep,
  (array: any[]) => [array, findDepth(array)],
  ([array, depth]) => [array, fp.chunk(depth, array)],
  ([array, coordinates]) => {
    const a = array[x1][y1];
    array[x1][y1] = array[x2][y2];
    array[x2][y2] = a;
    return array;
  }
]);

export const findDepth = (array: any[]) => {
  if (fp.isArray(array)) {
    if (array.some(fp.isArray)) {
      return 1 + findDepth(array[0]);
    }
    return 1;
  }
  return 0;
}