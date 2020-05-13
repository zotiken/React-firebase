export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const GET_NOTES = "GET_NOTES";

const handler = {
  [GET_NOTES]: (state, { payload }) => ({ ...state, notes: [...payload] }),
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload],
  }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes].filter((note) => payload !== note.id),
  }),
  DEFAULT: (state) => state,
};

export const fireBaseReducer = (state, action) => {
  const handle = handler[action.type] || handler.DEFAULT;
  return handle(state, action);
};
