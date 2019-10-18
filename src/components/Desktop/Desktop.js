import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';

import { TASK_PANEL_HEIGHT, GRID_SIZE } from "../../consts";
import { Label } from "../Label/Label";

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

const mapLabels = selection => label => <Label {...label} key={label.id} selection={selection} />;

export const Desktop = () => {
	const [selection, setSelection] = useState(0);
	const mapLabelsWithSelection = fp.flow([mapLabels, fp.map])(selection);
	const onLabelClick = fp.flow([
		fp.tap(fp.invoke('stopPropagation')),
		fp.property('currentTarget.id'),
		setSelection
	]);
	const onLabelDragEnd = (e) => fp.flow([
		fp.map(label => ({
			...label,
			x: label.id === e.target.id ? fp.floor(e.clientX / GRID_SIZE) : label.x,
			y: label.id === e.target.id ? fp.floor(e.clientY / GRID_SIZE) : label.y
		})),
		setLabels,
	])(labels);
	const [labels, setLabels] =
		fp.flow([
			fp.map(fp.flow([
				fp.assign({
					onClick: onLabelClick,
					onDragEnd: onLabelDragEnd,
				}),
			])),
			useState
		])(initLabels);
	const children = mapLabelsWithSelection(labels);
	return (
		<DesktopEl onClick={onLabelClick} id={"0"}>
			{ children }
		</DesktopEl>
	);
};
