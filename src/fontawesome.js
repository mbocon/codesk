// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';

library.add(
  faMoneyBill,
  faCode,
  faHighlighter
  // more icons go here
);

import React from 'react';
import { render } from 'react-dom';

// import your fontawesome library
import './fontawesome';

render(<App />, document.getElementById('root'));