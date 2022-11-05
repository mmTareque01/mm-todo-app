
import {  completedTask, deleteAlTask, getToDo, incompletedTask } from '../redux/state/todoSlice'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { getToDoList } from '../controller/dataController'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({dispatch}) {
  return (
    <Menu as="div" className="relative inline-block text-left float-right">
      <div>
        <Menu.Button className="
        inline-flex w-full 
        justify-center 
        px-7
        py-3
        rounded-lg
        text-gray-600
        border-b-2
        border-t-2
        border-l-2
        border-r-2
        border-gray-600
        border-gray-600
        hover:text-white      
        hover:bg-slate-600
        hover:border-slate-600
        ">
          Options
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={()=>{dispatch(deleteAlTask())}}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                  Delete All
                </a>
              )}
            </Menu.Item>


            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={()=>{dispatch(getToDo(getToDoList()))}}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                   All Task
                </a>
              )}
            </Menu.Item>
            
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={()=>{dispatch(completedTask())}}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                  Completed Task
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={()=>{dispatch(incompletedTask())}}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                  Incomplete Task
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

