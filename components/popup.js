import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoData from '../model/todo'
import Button from './button'
import ButtonType from '../utils/button'
import { addToDo, getActiveTask, updateTask } from '../redux/state/todoSlice'

export default function Task({ modal, setModal }) {
  // const [data, setData] = useState({
  //   name: '',
  //   description: ''
  // })
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const timeStamp = new Date().getTime()
  const dispatch = useDispatch()
  var activeTask = useSelector((state) => state.todo.activeTask)

  const handleOnClick = (title, descrioption, timeStamp) => {
    // alert(Button_type.create)
    switch (modal.type) {
      case ButtonType.create.toLowerCase():
        dispatch(addToDo(todoData(timeStamp, title, descrioption, timeStamp, false)))
        setTitle('')
        setDescription('')
        break
      case ButtonType.update.toLowerCase():
        dispatch(updateTask(todoData(activeTask.id, title, descrioption, timeStamp, false)))
        break
    }
  }

  // const updateData = ()=>{
  //   return !data.name? { ...data,  } : item;
  // }
  // console.log(dispatch(getActiveTask()))
  // console.log("wlkring")

  const handleClosePopUp = () => {
    setTitle('');
    setDescription('');
    setModal(false, '', '');
  }
  useEffect(() => {
    if (modal.type == ButtonType.update.toLocaleLowerCase()) {
      setTitle(activeTask.title)
      setDescription(activeTask.description)

    }
  }, [modal])

  return (
    <>
      <div className={`
        ${modal.isDisplay ? 'block' : 'hidden'}
          `
      }
        style={{
          background: 'rgba(10, 10, 10, 0.8)',
          zIndex: 99,
          position: 'absolute',
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0
        }}>

        <div className='w-96 h-96 m-auto mt-64'>
          <div className='text-right text-white font-bold text-2xl'>
            <span
              onClick={() => { handleClosePopUp() }}
              className='cursor-pointer p-3 text-gray-500 hover:text-white'
            >X</span>
          </div>
          <div className='bg-slate-300 p-10'>

            <p className='text-center text-gray-500 font-bold text-lg'>{modal.title}</p>

            {/* <form> */}
            <div className='my-3'>
              <label className='text-gray-500 text-xs'>Task Title</label> <br />
              <input
                className='m-auto py-2 block px-2 rounded-md w-full'
                placeholder='Title'
                name='title'
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
              />
            </div>

            <div>
              <label className='text-gray-500 text-xs'>Description</label> <br />
              <textarea
                className='m-auto py-2 block px-2 rounded-md w-full'
                rows="4" cols="50"
                placeholder='Description...'
                name="description"
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
              />
            </div>

            <div className='my-4 text-center'>
              <Button lg button={modal.type} onClick={() => { handleOnClick(title, description, timeStamp) }} />
            </div>


            {/* </form> */}
          </div>
        </div>

      </div>
    </>
  )
}
