import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Language } from '../../global';
import i18n from "i18next";

const initialState : Language = {
    value : "sk"
};

const languageSlice = createSlice({
    name: 'language',
    initialState: initialState,
    reducers: {
        setLang: (state, action : PayloadAction<string> ) => {
            state.value = action.payload;
            i18n.changeLanguage(action.payload);
        }
    }
})

export const { setLang } = languageSlice.actions;
export default languageSlice.reducer;