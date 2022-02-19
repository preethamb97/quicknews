import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: null,
}

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setDestination: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setDestination } = navSlice.actions;

//selectors

export const selectDestination = (state) => state.nav.language;

export default navSlice.reducer;