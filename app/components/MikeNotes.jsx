import React from 'react';

import Sidebar from './sidebar/Sidebar';
import NotesIndex from './notes/NotesIndex';
import NoteForm from './notes/NoteForm';

export default function(props) {
  return (
    <section className='app'>
      <Sidebar />
      <NotesIndex />
      <NoteForm />
    </section>
  );
}
