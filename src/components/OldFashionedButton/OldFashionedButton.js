import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';
import { Link } from 'react-router-dom';

import { useSize } from '../useSize';

const OldFashionedButtonEl = styled.button`
border: 7px ridge;
overflow: hidden;
background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
width: 200px;
display: flex;
flex-direction: row-reverse;
cursor: pointer;
& span {
  font-family: VT323, sans-serif;
  font-size: 1.5rem; 
  white-space: nowrap; 
  padding: 0px;
}
`;

const addLetter = (fromText, to, charAt) => [
  to,
  fromText.charAt(charAt % fromText.length)
].join('');

const removeFirstLetter = (text) => text.substring(1);

const funcIf = (condition, func) => condition ? func : fp.identity;

export const OldFashionedButton = (props) => {
  const { text } = props;
  const [displayedText, setDisplayedText] = useState({ text: '', index: 0 });
  const [buttonSize, buttonRef] = useSize([displayedText]);
  const [spanSize, spanRef] = useSize([displayedText]);
  useEffect(() => {
    const update = () => {
      const shouldRemoveFirstSymbol = fp.gt(spanSize.width, buttonSize.width);
      const removeFirst = funcIf(shouldRemoveFirstSymbol, removeFirstLetter);
      setDisplayedText({
        text: fp.flow([addLetter, removeFirst])(text, displayedText.text, displayedText.index),
        index: displayedText.index + 1
      });
    };
    const interval = setTimeout(update, 100);
    return () => clearTimeout(interval);
  }, [displayedText]);
  return (
    <OldFashionedButtonEl ref={ buttonRef }>
      <Link to={ '/beta' }>
        <span ref={ spanRef }>{ displayedText.text }</span>
      </Link>
    </OldFashionedButtonEl>
  );
};
