import React from 'react';
import ReactDOM from 'react-dom';

import * as notesApiUtil from './app/utils/notesApiUtil';
window.notesApiUtil = notesApiUtil;

const Root = () => (
  <h1>Hello, world.</h1>
)

ReactDOM.render(<Root></Root>, document.getElementById('react-root'));
