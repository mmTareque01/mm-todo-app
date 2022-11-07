import ButtonType from '../utils/button'
import ButtonStyle from '../utils/buttonStyle'

export default function Button({ onClick, button, lg, disabled=false, title}) {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      title={title}
      className={
        `rounded-lg
        border-b-2
        border-t-2
        border-l-2
        border-r-2
        
        ${ButtonStyle(button, lg, disabled)}    
      `}
    >
      {ButtonType[button]}
      

    </button>
  )
}
