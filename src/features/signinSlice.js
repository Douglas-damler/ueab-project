import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "refresh",
  initialState: {
    render: sessionStorage.hasOwnProperty("auth_token"),
  },

  reducers: {
    rerender: (state, action) => {
      state.render = action.payload;
    },
  },

  extraReducers: {},
});

export default signInSlice.reducer;
export const { rerender } = signInSlice.actions;
