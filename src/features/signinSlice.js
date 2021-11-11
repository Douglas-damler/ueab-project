import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const aunthenticate = createAsyncThunk(
    'signin/aunthenticate',
    async (details) => {
        // const { email, password, confirm_password } = details;
        var axios = require("axios").default;
       var options = {
           method: 'GET',
           url: 'https://free-news.p.rapidapi.com/v1/search',
           params: {q: 'Religion', lang: 'en'},
           headers: {
            'x-rapidapi-key': '979d05050emshf7dd085f9e872dbp1d41b3jsn130311b62321',
            'x-rapidapi-host': 'free-news.p.rapidapi.com'  
           }
       };

       const response = await axios.request(options);
       const data = response.data;
       const articles = data.articles;
       console.log(articles);
       return articles; 
    }
)

const signInSlice = createSlice({
    name: 'signin',
    initialState: {
        userDetails: {},
        isAunthenticating: false,
        isAunthenticated: true,
        hasFailedToAuntheticate: false

    },

    reducers: {},

    extraReducers: {
        [aunthenticate.pending]: (state, action) => {
            state.isAunthenticating = true;
            state.isAunthenticated = false;
            state.hasFailedToAuntheticate = false
        },

        [aunthenticate.fulfilled]: (state, action) => {
            state.userDetails = action.payload;
            state.isAunthenticating = false;
            state.isAunthenticated = true;
        },

        [aunthenticate.rejected]: (state, action) => {
            state.isAunthenticating = false;
            state.isAunthenticated = false;
            state.hasFailedToAuntheticate = true;
        }
    }
});

export default signInSlice.reducer;