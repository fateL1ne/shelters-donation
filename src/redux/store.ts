import { configureStore } from '@reduxjs/toolkit';
import donationReducer from './slices/Donation';
import userReducer from './slices/User';
import stepReducer from './slices/Steps';

export default configureStore({
    reducer: {
      user: userReducer,
      donation: donationReducer,
      steps: stepReducer
    },
});
  