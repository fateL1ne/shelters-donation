import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Donation, Shelter } from '../../global';


const initialState : Donation = {
    general : true,
    amount : 0
} 

const donationSlice = createSlice({
    name: 'donation',
    initialState: initialState,
    reducers: {
        setDonation(state, action : PayloadAction<Donation>) {
            state = action.payload;
        },
        setAmount(state, action : PayloadAction<number>) {
            state.amount = action.payload;
        },
        setGeneral(state, action : PayloadAction<boolean>) {
            state.general = action.payload;
        },
        setShelter(state, action : PayloadAction<Shelter>) {
            state.shelter = action.payload;
        }, 
        resetDonation(state) {
            state = initialState
        }
    }
})

export const { setDonation, setAmount, setGeneral, setShelter, resetDonation } = donationSlice.actions;
export default donationSlice.reducer;