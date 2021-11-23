import { configureStore } from "@reduxjs/toolkit";

import signinReducer from '../features/signinSlice';

export default configureStore ({
    reducer: {
        signin: signinReducer
    }
});