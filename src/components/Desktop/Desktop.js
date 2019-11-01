import React, { useState } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';

import { TASK_PANEL_HEIGHT, GRID_SIZE } from "../../consts";
import { Label } from "../Label/Label";
import { setSelectionByEvent, getCoordinate } from '../../utils';
import { useWindowSize } from '../useWindowSize';
import folderImg from '../../img/folder.png';
import { Folder } from '../Folder/Folder';
import { mapLabelsWithSelection, AppGrid } from '../AppGrid/AppGrid';

const DesktopEl = styled.div`
	height: calc(100vh - ${TASK_PANEL_HEIGHT}px);
	/* display: grid; */
	/* grid-template-columns: repeat(auto-fill, ${GRID_SIZE}px); */
	/* grid-template-rows: repeat(auto-fill, ${GRID_SIZE}px); */
`;

const initLabels = [{
	name: 'far.exe',
	src: 'https://soft2u.ru/wp-content/uploads/far_icon_soft2u.ru_.jpg',
	id: fp.uniqueId()
}, {
	name: 'Posts',
	src: folderImg,
	id: fp.uniqueId(),
	ProgramComponent: Folder,
	childProps: {
		labels: [{
			name: 'far.exe',
			src: 'https://soft2u.ru/wp-content/uploads/far_icon_soft2u.ru_.jpg',
			id: fp.uniqueId()
		}, {
			name: 'Posts',
			src: folderImg,
			id: fp.uniqueId(),
		}]
	}
}];

export const Desktop = props => {
	const { selection, setSelection } = props;
	// const mapLabelsWithSelection = fp.flow([mapLabels, fp.map])(selection);
	const windowSize = useWindowSize();
	const onLabelClick = fp.flow([
		fp.tap(fp.invoke('stopPropagation')),
		setSelectionByEvent(setSelection),
	]);
	const onLabelDragStart = setSelectionByEvent(setSelection);
	const onLabelDragEnd = (e) => fp.flow([
		fp.map(label => ({
			...label,
			x: label.id === e.target.id ? getCoordinate(windowSize.width)(e.clientX / GRID_SIZE) : label.x,
			y: label.id === e.target.id ? getCoordinate(windowSize.height)(e.clientY / GRID_SIZE) : label.y
		})),
		setLabels,
	])(labels);
	const [labels, setLabels] = useState(initLabels);
	const labelProps = {
		onClick: onLabelClick,
		onDragEnd: onLabelDragEnd,
		onDragStart: onLabelDragStart,
		setSelection,
		selection
	};
	// const children = mapLabelsWithSelection(labels);
	return (
		<DesktopEl onClick={ onLabelClick } id={ "0" }>
			{ /* mapLabelsWithSelection(labelProps)(labels) */ }
			<AppGrid labels={ initLabels } selection={ selection } setSelection={ setSelection } />
		</DesktopEl>
	);
};
