import { createSlice } from "@reduxjs/toolkit";
import { setToDo, getToDoList, deleteAllToDo } from "../../controller/dataController";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: [],
        activeTask: {}
    },
    reducers: {
        getToDo:(state, action)=>{
            state.todoList = action.payload
        },
        addToDo: (state, action) => {
            state.todoList.push(action.payload);
            setToDo(state.todoList)
        },
        setActiveTask: (state, action) => {
            state.activeTask = action.payload
        },
        deleteATask: (state, action) => {
            let filteredData = []
            state.todoList.map(item => {
                if (item.id !== action.payload) { filteredData.push(item) }
            })
            state.todoList = filteredData;
            setToDo(filteredData)
        },

        deleteAlTask: (state) => {
            deleteAllToDo();
            state.todoList =[]
        },
        updateTask: (state, action) => {
            const index = (state.todoList).findIndex(object => {
                return object.id === action.payload.id;
            });
            state.todoList[index] = action.payload

            setToDo(state.todoList)
        },

        completeTask:(state, action)=>{
            const index = (state.todoList).findIndex(object => {
                return object.id === action.payload;
            });
            state.todoList[index].isCompleted = true

            setToDo(state.todoList)
        },
        completedTask:(state)=>{
            let completed_task = []
            let data = getToDoList()
            data.map(item=>{
                if(item.isCompleted == true){completed_task.push(item)}
            })
            state.todoList = completed_task
        },
        incompletedTask:(state)=>{
            let incompleted_task = []
            let data = getToDoList()
            data.map(item=>{
                if(item.isCompleted == false){incompleted_task.push(item)}
            })
            state.todoList = incompleted_task
        }
    }
})
export const {getToDo, addToDo, setActiveTask, deleteATask, deleteAlTask, updateTask,completeTask, completedTask, incompletedTask } = todoSlice.actions;
export default todoSlice.reducer;