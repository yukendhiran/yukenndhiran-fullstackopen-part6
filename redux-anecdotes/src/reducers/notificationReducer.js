import { createSlice } from "@reduxjs/toolkit";

const notiicationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    notifyNew(state, action) {
      const content = action.payload;
      return "created " + "'" + content + "'";
    },

    notifyVote(state, action) {
      const content = action.payload;
      return "voted " + "'" + content + "'";
    },
  },
});

export const { notifyNew, notifyVote } = notiicationSlice.actions;
export default notiicationSlice.reducer;
