import React from 'react'

const Button = ({btnText, onClick}) => {
  return (
    <div>
        <button  onClick={onClick} >{btnText}</button>
    </div>
  )
}

export default Button