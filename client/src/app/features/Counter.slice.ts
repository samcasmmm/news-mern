import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const incrementFn = (state: CounterState) => {
  state.count = state.count + 1;
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incre: incrementFn,
  },
});

export const selectCount = (state: { counter: CounterState }) =>
  state.counter.count;
export const { incre } = counterSlice.actions;
export default counterSlice.reducer;
