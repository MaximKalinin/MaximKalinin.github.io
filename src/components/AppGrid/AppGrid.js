// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';
import { Label } from '../Label/Label';
import { ILabel } from '../../model';
import { GRID_SIZE } from '../../consts';
import { useRef } from 'react';
import { call, setSelectionByEvent, swap, swapMatrixCells } from '../../utils';

const AppGridEl = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, ${GRID_SIZE}px);
	grid-template-rows: repeat(auto-fill, ${GRID_SIZE}px);
`;

interface AppGridProps {
  labels: ILabel[];
  selection: number;
  setSelection: (selection: number) => void;
}

export const AppGrid = (props: AppGridProps) => {
  const { labels, selection, setSelection } = props;
  const appGridRef = useRef<div>();
  const [grid, setGrid] = useState(null);
  const onLabelClick = fp.flow([
    fp.tap(fp.invoke('stopPropagation')),
    setSelectionByEvent(setSelection),
  ]);
  const onLabelDragStart = setSelectionByEvent(setSelection);
  const onLabelDragEnd = fp.flow([
    (event: DragEvent) => [event.target.id, event.clientX, event.clientY],
    ([id, x, y]) => [id, x, y, appGridRef.current.getBoundingClientRect()],
    ([id, x, y, rect]) => [id, x - rect.left, y - rect.top],
    fp.tap(console.log),
    ([id, x, y]) => ([id, fp.floor(x / GRID_SIZE), fp.floor(y / GRID_SIZE)]),
    ([id, x, y]) => [id, x, y, grid.findIndex(col => col.some(cell => cell === id))],
    ([id, x1, y1, x2]) => [id, x1, y1, x2, grid[x2].indexOf(id)],
    ([id, x1, y1, x2, y2]) => grid[x1][y1] === 0 ? swapMatrixCells(x1, y1, x2, y2) : grid,
    setGrid
  ]);
  useEffect(() => {
    if (appGridRef.current) {
      const [height, width] = fp.flow([
        fp.property('current'),
        fp.tap(console.log),
        (ref) => [fp.property('offsetHeight', ref), fp.property('offsetWidth', ref)],
        fp.map(fp.flow([
          fp.divide(fp, GRID_SIZE),
          fp.floor
        ]))
      ])(appGridRef);
      if (height === 0 && width === 0) return;

      fp.flow([
        ([height, width]) => [fp.times(() => fp.times(() => 0, height), width), height],
        fp.tap(([gridArray, height]) => (labels.forEach((label, index) =>
          gridArray[fp.floor(index / height)][index % height] = label.id
        ))),
        ([gridArray, height]) => gridArray,
        setGrid
      ])([height, width]);
    }
  }, [appGridRef.current]);
  return (
    <AppGridEl ref={ appGridRef }>
      { grid && grid.map((col, x) => col.map(
        (cell, y) => cell !== 0 && (
          <Label
            { ...fp.find({ id: cell }, labels) }
            x={ x }
            y={ y }
            key={ cell }
            selection={ selection }
            setSelection={ setSelection }
            onClick={ onLabelClick }
            onDragStart={ onLabelDragStart }
            onDragEnd={ onLabelDragEnd }
          />
        )
      )) }
    </AppGridEl>
  );
};
