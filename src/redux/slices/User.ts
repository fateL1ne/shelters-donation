import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserCred } from '../react-app-env';


const initialState : UserCred = {
    firstName : "",
    lastName : "",
    phone: "",
    email: ""
} 

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action : PayloadAction<UserCred>) {
            state = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
