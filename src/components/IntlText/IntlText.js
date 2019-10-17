import * as React from 'react';

import Store from '../../context';

const IntlText = ({ id }) => {
  const { messages } = React.useContext(Store);
  return (
    messages[id]
  );
};

export default IntlText;