import { RECEIVE_NOTES } from '../actions/notesActions';

const initialState = {};

export default function (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_NOTES:
      return Object.assign({}, state, action.notes);

    default:
      return state;
  }
}

export const selectAllNotes = state =>
 Object.keys(state).map(id => state[id]);
