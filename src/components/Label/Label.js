import React, { FC, useState } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';
import { ErrorOpenLink } from '../ErrorOpenLink/ErrorOpenLink';
import { ILabel } from '../../model';

const LabelEl = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	grid-row-start: ${({ y }) => y + 1};
	grid-column-start: ${({ x }) => x + 1};
	grid-row-end: ${({ y }) => y + 2};
	grid-column-end: ${({ x }) => x + 2};
	cursor: pointer;
	&.selected {
		span {
			background: cornflowerblue;	
		}
		div.img:after {
      position: absolute;
	    content: "";
	    display: block;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    background: rgba(0, 113, 253, 0.45);
    }
	}
	& img {
    max-width: 100%;
    max-height: 100%;
    position: relative;
  }
  & > div.img {
    position: relative;
    text-align: center;
    max-width: 70%;
    max-height: 60%;
  }
  & > span {
    font-family: VT323, sans-serif;
    margin-top: 5px;
    padding: 2px;
    user-select: none;
  }
`;

interface ILabelProps {
	src: string;
	name: string;
	x: number;
	y: number;
	onClick: () => void;
	onDragStart: (e: Event) => void;
	onDragEnd: (e: Event) => void;
	id: string;
	selection: string;
	setSelection: (selection: string) => void;
	ProgramComponent: FC;
	childProps: {
		labels?: ILabel[];
	}
}

export const Label = (props: ILabelProps) => {
	const { src, name, x, y, onClick, onDragEnd, id, selection, onDragStart, ProgramComponent, setSelection, childProps } = props;
	const [programId] = useState(fp.uniqueId());
	const [programOpened, setProgramOpened] = useState(false);
	return (
		<React.Fragment>
			<LabelEl
				x={ x }
				y={ y }
				className={ id === selection ? 'selected' : '' }
				onClick={ onClick }
				onDragEnd={ onDragEnd }
				onDragStart={ onDragStart }
				id={ id }
				draggable
				onDoubleClick={ fp.flow([() => setProgramOpened(true), () => setSelection(programId)]) }
			>
				<div className={ 'img' }>
					<img src={ src } alt={ name } draggable={ false } />
				</div>
				<span>{ name }</span>
			</LabelEl>
			<ProgramComponent
				id={ programId }
				close={ () => setProgramOpened(false) }
				isOpen={ programOpened }
				setSelection={ setSelection }
				selection={ selection }
				{ ...childProps }
			/>
		</React.Fragment>
	);
};

Label.defaultProps = {
	ProgramComponent: ErrorOpenLink
};
