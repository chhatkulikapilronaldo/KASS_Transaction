import React from 'react'

export const Button = ({className, type, handleClick, value, name}) => {
  return (
    <div className='button'>
      <button className={className} type={type} onClick={handleClick} value={value}>{name}</button>
    </div>
  )
}


