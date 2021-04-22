import { createSlice } from '@reduxjs/toolkit';
import { StepsState } from '../../global';


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
        },
        resetSteps: (state : StepsState) => {
            state.actualStep-=2
        }
    }
})

export const { increment, decrement, resetSteps } = stepSlice.actions;
export default stepSlice.reducer;