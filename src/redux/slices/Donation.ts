import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Donation } from '../../react-app-env';


const initialState : Donation = {
    general : true,
    amount : 10
} 

const donationSlice = createSlice({
    name: 'donation',
    initialState: initialState,
    reducers: {
        setDonation(state, action : PayloadAction<Donation>) {
            state = action.payload;
        }
    }
})

export const { setDonation } = donationSlice.actions;
export default donationSlice.reducer;