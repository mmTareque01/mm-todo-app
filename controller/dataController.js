const key = 'mm-todo-list'

export const getToDoList=()=>{
    let todoList = window.localStorage.getItem(key)
    if(todoList){
        return JSON.parse(todoList)
    }
    else{
        return []
    }
}

export const setToDo=(data)=>{
    window.localStorage.setItem(key, JSON.stringify(data))
}

export const deleteAllToDo=()=>{
    window.localStorage.removeItem(key)
}
