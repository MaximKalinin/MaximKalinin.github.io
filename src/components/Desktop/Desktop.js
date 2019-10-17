import React, { useState } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';

import { TASK_PANEL_HEIGHT, GRID_SIZE } from "../../consts";
import {Label} from "../Label/Label";

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
	selected: false,
	id: fp.uniqueId()
}];

const mapLabels = label => <Label {...label} key={label.id} />;

export const Desktop = () => {
	const onLabelClick = (e, id) => fp.flow([
		fp.tap(() => e.stopPropagation()),
		fp.map(label => ({ ...label, selected: label.id === id })),
		setLabels
	])(
		labels
	);
	const onLabelDrag = (e, id) => fp.flow([
		fp.map(label => ({
			...label,
			x: label.id === id ? fp.round(e.clientX / GRID_SIZE) : label.x,
			y: label.id === id ? fp.round(e.clientY / GRID_SIZE) : label.y
		})),
		setLabels
	])(labels);
	const addOnClick = label => ({...label, onClick: (e) => onLabelClick(e, label.id)});
	const addOnDrag = label => ({...label, onDrag: (e) => onLabelDrag(e, label.id)});
	const [labels, setLabels] =
		fp.flow([
			fp.map(fp.flow([
				addOnClick,
				addOnDrag
			])),
			useState
		])(initLabels);
	// useState(fp.map(
	// 	fp.flow([addOnClick, addOnDrag]),
	// 	initLabels
	// ));
	return (
		<DesktopEl onClick={(e) => onLabelClick(e, 0)}>
			{labels.map(mapLabels)}
		</DesktopEl>
	);
};
