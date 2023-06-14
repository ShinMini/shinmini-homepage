import React from 'react';

import Greeting from './Greeting';
import Login from './Login';
import Comment from '@src/components/Comment';

export default function Home() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Greeting, null),
    /*#__PURE__*/ React.createElement(Comment, null),
    /*#__PURE__*/ React.createElement(Login, null),
  );
}
