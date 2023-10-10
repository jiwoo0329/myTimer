import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
    value: number;
};

const initialState = {
    value: 0,
} as CounterState;

export const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state) => {
            if (state.value < 2) {
                state.value += 1;
            }
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
            }
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
});

export const {
    increment,
    incrementByAmount,
    decrement,
    decrementByAmount,
    reset,
} = counter.actions;
export default counter.reducer;
