import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++
    },
    decrement: (state) => {
      state.counterVal--
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  }
});

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false, // Corrected spelling here
  reducers: {
    toggle: (state) => {
      return !state; // Corrected the way state is toggled
    }
  }
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  }
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;

export default counterStore;
