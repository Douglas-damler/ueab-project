import { configureStore } from "@reduxjs/toolkit";
import tutorialsReducer from '../features/tutorialsSlice';

export default configureStore ({
    reducer: {
        tutorials: tutorialsReducer
    }
});