import { combineReducers } from 'redux';

import notes, * as fromNotes from './notesReducer';

const rootReducer = combineReducers({
  notes,
});

export default rootReducer;

export const selectAllNotes = state => fromNotes.selectAllNotes(state.notes);
