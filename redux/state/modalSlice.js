import { createSlice } from "@reduxjs/toolkit";
import modalData from "../../model/modal";

export const modalSlice = createSlice({
    name: "modal",
    initialState:{
        modalControlData:modalData(false, '', '')
    },
    reducers: {
        controlModal: (state, action) => {
            state.modalControlData = action.payload
        }
    }
})
export const { controlModal } = modalSlice.actions;
export default modalSlice.reducer;