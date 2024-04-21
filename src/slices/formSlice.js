import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
    name: "form",
    initialState: null,
    reducers: {
        addFormData: (state, action) => {
            return action.payload;
        },
    },
});


export const { addFormData } = formSlice.actions;
export default formSlice.reducer