import React from 'react'

export const Card1 = (props) => {
    
  return (
    <div className='bg-red-400  text-white w-44 h-48 m-2 pt-4'>
        <img src={props.image} className='rounded-[40%]' alt="" />
        <h2 className=''>{props.name}</h2>
        <p className=''>{props.designation}</p>
    </div>
  )
}
