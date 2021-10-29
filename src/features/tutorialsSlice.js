import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import data from '../links/data.json'

export const loadTutorials = createAsyncThunk(
    'tutorials/loadTutorials',
    () => {
        console.log(data);
        return data;
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