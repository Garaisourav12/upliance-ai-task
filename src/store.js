import { configureStore } from "@reduxjs/toolkit";
import formReducer from './slices/formSlice'


const store = configureStore({
    reducer: {
        formData: formReducer
    }
})

export default store