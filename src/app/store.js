import { configureStore } from "@reduxjs/toolkit";
import tutorialsReducer from '../features/tutorialsSlice';
import signinReducer from '../features/signinSlice';

export default configureStore ({
    reducer: {
        tutorials: tutorialsReducer,
        signin: signinReducer
    }
});