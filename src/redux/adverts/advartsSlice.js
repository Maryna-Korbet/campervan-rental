import { createSlice } from "@reduxjs/toolkit";
import { getAllAdvartsOperation } from "./operations";

const handlePending = (state) => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.isError = action.payload;
};

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: {
        adverts: [],
        isLoading: false, 
        isError: null,
        nextPage: 1, 
    },
    reducers: {
        loadMore: (state) => {
            state.nextPage++; 
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getAllAdvartsOperation.pending, handlePending)
            .addCase(getAllAdvartsOperation.fulfilled, (state, action) => {
                state.isLoading = false;
                state.adverts = [...state.adverts, ...action.payload];
                state.isError = null;
            })
            .addCase(getAllAdvartsOperation.rejected, handleRejected);
    },
});

export const { loadMore } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;


