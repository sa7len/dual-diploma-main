import React from 'react'

const Input = ({onChange, value,name,placeholder}) => {
  return (
    <div>
        <input onChange={onChange} placeholder={placeholder} name={name} value={value} type="text"   />
    </div>
  )
}

export default Input