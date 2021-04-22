import { configureStore } from '@reduxjs/toolkit';
import donationReducer from './slices/Donation';
import userReducer from './slices/User';
import stepReducer from './slices/Steps';
import langReducer from './slices/Language';

export default configureStore({
    reducer: {
      user: userReducer,
      donation: donationReducer,
      steps: stepReducer,
      lang: langReducer
    },
});
  