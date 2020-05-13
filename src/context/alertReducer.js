export const SHOW_ALERT = "SHOW_ALERT";
export const HIDE_ALERT = "HIDE_ALERT";

const handler = {
  [SHOW_ALERT]: (state, { type, param }) => ({
    ...state,
    visible: true,
    type: param,
  }),
  [HIDE_ALERT]: (state, action) => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

// const initState = { visible: false };

export function alertReducer(state, action) {
  //  switch (action.type) {
  //    case SHOW_ALERT:
  //      return { ...state, visible: true };
  //    case HIDE_ALERT:
  //      console.log('1111');
  //      return { ...state, visible: false };
  //    default:
  //      throw new Error();
  //  }
  const handle = handler[action.type] || handler.DEFAULT;
  return handle(state, action);
}
