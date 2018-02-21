import React from 'react';
import { connect } from 'react-redux';

import { selectAllNotes } from '../../reducers';
import { requestNotes } from '../../actions/notesActions';
import NoteItem from './NoteItem';

class NotesIndex extends React.Component {
  componentDidMount() {
    this.props.requestNotes();
  }

  render() {
    return (
      <section>
        <ul>
          {
            this.props.notes.map(note => <NoteItem note={note} key={note.id} />)
          }
        </ul>
      </section>
    );
  }
}

export default connect(
  (state, ownProps) => ({ notes: selectAllNotes(state) }),
  { requestNotes }
)(NotesIndex);
