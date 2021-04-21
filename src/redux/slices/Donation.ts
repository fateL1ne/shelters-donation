import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Donation, Shelter } from '../../global';


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
        },
        setAmount(state, action : PayloadAction<number>) {
            state.amount = action.payload;
        },
        setGeneral(state, action : PayloadAction<boolean>) {
            state.general = action.payload;
        },
        setShelter(state, action : PayloadAction<Shelter>) {
            state.shelter = action.payload;
        }
    }
})

export const { setDonation, setAmount, setGeneral, setShelter } = donationSlice.actions;
export default donationSlice.reducer;