import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
  selectors: {
    selectNameFilter: (state) => state.name,
  },
});

export const { changeFilter } = filtersSlice.actions;

export const { selectNameFilter } = filtersSlice.selectors;

export default filtersSlice.reducer;
