import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStructure } from '../../global';


const initialState : UserStructure = {
    firstName : "",
    lastName : "",
    phone: "",
    email: ""
} 

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action : PayloadAction<UserStructure>) {
            state = action.payload;
        },
        setFirstName(state, action : PayloadAction<string>) {
            state.firstName = action.payload;
        },
        setLastName(state, action : PayloadAction<string>) {
            state.lastName = action.payload;
        },
        setPhone(state, action : PayloadAction<string>) {
            state.phone = action.payload;
        },
        setEmail(state, action : PayloadAction<string>) {
            state.email = action.payload;
        }
    }
})

export const { setUser, setFirstName, setLastName, setEmail, setPhone } = userSlice.actions;
export default userSlice.reducer;
