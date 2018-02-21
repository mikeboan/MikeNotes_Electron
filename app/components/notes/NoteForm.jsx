import React from 'react';
import { connect } from 'react-redux';

import { createNote } from '../../actions/notesActions';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNote(Object.assign(this.state));
  }

  handleInput(fieldName) {
    return (e) => {
      e.preventDefault();
      this.setState({ [fieldName]: e.currentTarget.value });
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          value={ this.state.title }
          onChange={this.handleInput('title')}
        ></input>

      <label htmlFor='body'>Body</label>
        <input
          id='body'
          type='textarea'
          value={ this.state.body }
          onChange={ this.handleInput('body') }
        ></input>
      <input type='submit' value='Submit'></input>
      </form>
    );
  }
}

export default connect(
  null,
  { createNote }
)(NoteForm);
