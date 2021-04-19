import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState : number = 1;

const stepSlice = createSlice({
    name: 'steps',
    initialState: initialState,
    reducers: {
        next(state) {
            state += 1
        },
        previous(state) {
            state -= 1;
        }
    }
})

export const { next, previous } = stepSlice.actions;
export default stepSlice.reducer;