import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: ''
}

export const formSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        
        setText: (state, action) => {
            state.text = action.payload.text
        },
        resetForm: (state) => {
            
            state.text = '';
        }
    }
})

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;