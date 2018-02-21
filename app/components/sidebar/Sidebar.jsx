import React from 'react';
import { NavLink } from 'react-router-dom';

import TagsIndex from '../tags/TagsIndex';

export default function(props) {
  return (
    <header>
      <NavLink to='/notes' activeClassName='selected'>Notes</NavLink>
      <NavLink to='/trash' activeClassName='selected'>Trash</NavLink>
      <TagsIndex />
    </header>
  );
};
