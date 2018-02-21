import React from 'react';

export default function({ note: { body, title } }) {
  return (
    <li>
      <h2>{ title }</h2>
      <p>{ body }</p>
    </li>
  )
}
