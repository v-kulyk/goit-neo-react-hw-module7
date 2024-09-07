// У файлі filtersSlice.js оголоси слайс фільтра, використовуючи функцію createSlice().
// Екшени слайса для використання в dispatch:
// changeFilter - зміна значення фільтра в властивості name
// Оголоси функції-селектори для використання в useSelector:
// selectNameFilter - повертає значення фільтра з властивості name.
// З файла слайса експортуй редюсер, а також його екшени і селектори.

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
