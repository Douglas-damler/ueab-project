import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadTutorials = createAsyncThunk(
    'tutorials/loadTutorials',
    () => {
        axios.get('http://127.0.0.1:8000/api/videos')
        .then((response) => {
            console.log(response)
            console.log(response.data)
            return response.data;
        })
    }
);

const tutorialsSlice = createSlice(
    {
        name: 'features',
        initialState:  {
            tutorials: [],
            isLoadingTutorials: false,
            hasFailedToLoadTutorials: false,
        },

        reducers: {},

        extraReducers: {
            [loadTutorials.pending]: (state, action) => {
                state.isLoadingTutorials = true;
                state.hasFailedToLoadTutorials = false;
            },

            [loadTutorials.fulfilled]: (state, action) => {
                state.isLoadingTutorials = false;
                state.hasFailedToLoadTutorials = false
                state.tutorials = action.payload;
            },

            [loadTutorials.rejected]: (state, action) => {
                state.isLoadingTutorials = false
            }
        }

    }
);

export default tutorialsSlice.reducer;