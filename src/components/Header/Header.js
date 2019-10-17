import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import TextLink from '../TextLink/TextLink';
import { OldFashionedButton } from '../OldFashionedButton/OldFashionedButton';

import Store from '../../context';

const LANGUAGES = [{ code: 'ru', text: 'РУС' }, { code: 'en', text: 'ENG' }];

const HeaderEl = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  background: transparent;
  box-sizing: border-box;
`;

const Header = (props) => {
  const { lang: active, setLang: setActive } = React.useContext(Store);
  const { location } = props;
  if (location.pathname.match('beta')) return null;
  return (
    <HeaderEl>
      { LANGUAGES.map(lang => (
        <TextLink
          className={ (active === lang.code && "active") || "" }
          id={ lang.code }
          onClick={ () => setActive(lang.code) }
          key={ lang.code }
        >
          { lang.text }
        </TextLink>
      )) }
      <OldFashionedButton text={ ['***Click', 'to', 'go', 'to', 'old', 'interface*** '].join(' ') }>
      </OldFashionedButton>
    </HeaderEl>
  );
}

export default withRouter(Header);