import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Type for our state
export type ThemeState = {
  themeValue: "light" | "dark";
};

// Initial state
const initialState: ThemeState = {
  themeValue: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<undefined>) => {
      state.themeValue = state.themeValue === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
