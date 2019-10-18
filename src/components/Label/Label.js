import React from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';

const LabelEl = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	grid-row-start: ${({y}) => y + 1};
	grid-column-start: ${({x}) => x + 1};
	grid-row-end: ${({y}) => y + 2};
	grid-column-end: ${({x}) => x + 2};
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

export const Label = (props) => {
	const { src, name, x, y, onClick, onDragEnd, id, selection } = props;
	return (
		<LabelEl
			x={x}
			y={y}
			className={id === selection ? 'selected' : ''}
			onClick={onClick}
			onDragEnd={ onDragEnd }
			id={ id }
			draggable
		>
			<div className={'img'}>
				<img src={src} alt={name} draggable={ false  } />
			</div>
			<span>{name}</span>
		</LabelEl>
	);
};
