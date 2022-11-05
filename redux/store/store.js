import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../state/modalSlice";
import todoSlice from "../state/todoSlice";



export default configureStore({
    reducer:{
        modal: modalSlice,
        todo: todoSlice
    }
})
