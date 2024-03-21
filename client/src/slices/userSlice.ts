import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type CounterState = {
  currentUser: User | null;
  error: null | string;
  isLoading: boolean;
};

const initialState: CounterState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setIsLoading, setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;
