import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { completeTask, deleteATask, setActiveTask } from '../redux/state/todoSlice';
import Button from './button';

export default function TaskOverview({ setModal, data }) {
  const [task, setTask] = useState(data);
  const dispatch = useDispatch()
  useEffect(() => {
    setTask(data)
  }, [data])



  return (
    <>
      <div
        className='
    bg-white py-1 px-7 rounded-xl text-gray-700  justify-between my-3 md:flex'
        style={{ alignItems: 'center' }}
      >

        <div>
          <p className={task.isCompleted ? 'py-4 cursor-not-allowed' : 'py-4 cursor-pointer'} onClick={task.isCompleted ? () => { return 0 } : () => { dispatch(setActiveTask(task)); setModal(true, 'Task Details', 'update') }}>

            {task.title ? task.title : ''} 

          </p>
          <span className='text-xs text-gray-400'>{(Date(data.timestamp)).slice(4, 10) + ', '+ (Date(data.timestamp)).slice(10, 15)}</span>
        </div>


        <div>
          <Button onClick={() => dispatch(deleteATask(task.id))} name="Delete" button={'delete'} />
          <Button disabled={task.isCompleted} onClick={() => { dispatch(completeTask(task.id)) }} button={'complete'} />
          <Button disabled={task.isCompleted} onClick={() => { dispatch(setActiveTask(task)); setModal(true, 'Update Task Details', 'update') }} name="Update" button={'updateIcon'} />
        </div>


      </div>
    </>
  )
}
