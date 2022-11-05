const ButtonStyle = (clue, lg, isDisabled = false) => {

  switch (clue) {
    case 'delete':
      return 'hover:bg-red-700 border-red-700 hover:text-white text-red-700  px-2 py-1 mx-1 my-3';
    case 'create':
      return `hover:bg-green-700 border-green-700 hover:text-white text-green-700 mx-1 my-3 ${lg ? 'px-20 py-1' : 'px-2 py-1'}`;
    case 'update':
      return `${isDisabled ? 'text-green-300 hover:cursor-not-allowed' : 'hover:bg-green-700 hover:text-white text-green-700'} border-green-700  text-green-700 mx-1 ${lg ? 'px-20 py-1' : 'px-2 py-1'}`;
    case 'updateIcon':
      return `${isDisabled ? 'text-green-300 hover:cursor-not-allowed' : 'hover:bg-green-700 hover:text-white text-green-700'} border-green-700  text-green-700 mx-1 ${lg ? 'px-20 py-1' : 'px-2 py-1'}`;
    case 'complete':
      return `${isDisabled?'text-blue-300 hover:cursor-not-allowed':'hover:text-white text-blue-700 hover:bg-blue-700'}  border-blue-700   px-2 py-1 mx-1`;
    case 'completed':
      return 'border-blue-700 text-blue-300 px-2 py-1 mx-1 hover:cursor-not-allowed';
    default:
      return 'hover:bg-slate-600  border-slate-600 hover:text-white text-slate-600  px-7 py-3 mx-1'

  }
}

export default ButtonStyle

