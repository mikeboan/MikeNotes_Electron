import { normalize } from 'normalizr';

import * as notesApiUtil from '../utils/notesApiUtil';
import * as schema from '../utils/schema';

export const REQUEST_NOTES = 'REQUEST_NOTES';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const POST_NOTE = 'POST_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const receiveNotes = ({ entities: { notes }, result }) => ({
  type: RECEIVE_NOTES,
  notes
})

export const requestNotes = () =>
  dispatch => notesApiUtil.fetchNotes().then(
    notes => dispatch(receiveNotes(normalize(notes, schema.notes))));

export const createNote = (note) =>
  dispatch => notesApiUtil.postNote(note).then(
    note => dispatch(receiveNotes(normalize([note], schema.notes))));
