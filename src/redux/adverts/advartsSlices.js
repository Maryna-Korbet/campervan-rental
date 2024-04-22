import { createSlice } from "@reduxjs/toolkit";
import { getAllAdvartsOperation } from "./advartsOperations";

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
    extraReducers: builder => {
        builder
            .addCase(getAllAdvartsOperation.pending, handlePending)
            .addCase(getAllAdvartsOperation.fulfilled, (state, action) => {
                state.isLoading = false;
                state.adverts = action.payload;
                state.isError = null;
            })
            .addCase(getAllAdvartsOperation.rejected, handleRejected);
    },
});

export const advertsReducer = advertsSlice.reducer;