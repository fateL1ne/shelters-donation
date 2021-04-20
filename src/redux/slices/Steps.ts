import { createSlice } from '@reduxjs/toolkit';
import { StepsState } from '../../react-app-env';


const initialState : StepsState = {
    actualStep: 0
};

const stepSlice = createSlice({
    name: 'steps',
    initialState: initialState,
    reducers: {
        increment: (state : StepsState) => {
            state.actualStep++
        },
        decrement: (state : StepsState) => {
            state.actualStep--
        }
    }
})

export const { increment, decrement } = stepSlice.actions;
export default stepSlice.reducer;