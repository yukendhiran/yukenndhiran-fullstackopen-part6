import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const notiicationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    notify(state, action) {
      return action.payload;
    },

    clearNotification() {
      return initialState;
    },
  },
});

export const { notify, clearNotification } = notiicationSlice.actions;

export const setNotification = (content, time = 5) => {
  return async (dispatch) => {
    dispatch(notify(content));
    setTimeout(() => {
      dispatch(clearNotification());
    }, time * 1000);
  };
};

export default notiicationSlice.reducer;
