import { IAppState } from "./../../types/index";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IAppState = {
  theme: "",
  sidebarToggle: false,
};

const appStateSlice = createSlice({
  name: "app-state",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleSidebar, changeTheme } = appStateSlice.actions;
export default appStateSlice.reducer;
