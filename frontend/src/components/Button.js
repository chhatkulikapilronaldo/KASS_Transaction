import React from 'react'

const Button = ({className, type, handleClick, value, name}) => {
  return (
    <div className='button'>
      <button className={className} type={type} onClick={handleClick} value={value}>{name}</button>
    </div>
  )
}

export default Button
