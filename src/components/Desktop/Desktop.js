import React, { useState } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';

import { TASK_PANEL_HEIGHT, GRID_SIZE } from "../../consts";
import { Label } from "../Label/Label";
import { setSelectionByEvent, getCoordinate } from '../../utils';

const DesktopEl = styled.div`
	height: calc(100vh - ${TASK_PANEL_HEIGHT}px);
	display: grid;
	grid-template-columns: repeat(auto-fill, ${GRID_SIZE}px);
	grid-template-rows: repeat(auto-fill, ${GRID_SIZE}px);
`;

const initLabels = [{
	name: 'far.exe',
	src: 'https://soft2u.ru/wp-content/uploads/far_icon_soft2u.ru_.jpg',
	x: 0,
	y: 0,
	id: fp.uniqueId()
}];

const mapLabels = selection => label => <Label { ...label } key={ label.id } selection={ selection } />;

export const Desktop = props => {
	const { selection, setSelection } = props;
	const mapLabelsWithSelection = fp.flow([mapLabels, fp.map])(selection);
	const onLabelClick = fp.flow([
		fp.tap(fp.invoke('stopPropagation')),
		setSelectionByEvent(setSelection)
	]);
	const onLabelDragStart = setSelectionByEvent(setSelection);
	const onLabelDragEnd = (e) => fp.flow([
		fp.map(label => ({
			...label,
			x: label.id === e.target.id ? getCoordinate(window.innerWidth)(e.clientX / GRID_SIZE) : label.x,
			y: label.id === e.target.id ? getCoordinate(window.innerHeight)(e.clientY / GRID_SIZE) : label.y
		})),
		setLabels,
	])(labels);
	const [labels, setLabels] =
		fp.flow([
			fp.map(fp.flow([
				fp.assign({
					onClick: onLabelClick,
					onDragEnd: onLabelDragEnd,
					onDragStart: onLabelDragStart,
					setSelection
				}),
			])),
			useState
		])(initLabels);
	const children = mapLabelsWithSelection(labels);
	return (
		<DesktopEl onClick={ onLabelClick } id={ "0" }>
			{ children }
		</DesktopEl>
	);
};
