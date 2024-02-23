import React from 'react'
import image from './image.jpg'
import { Card1 } from './Card1'

export const Cards2 = () => {
  return (
    <div className='flex flex-wrap w-[45%] m-auto gap-4 '>
    <Card1 name="john" image={image} designation="sxtrs" />
    <Card1 name="john" image={image} designation="sxtrs" />
    <Card1 name="john" image={image} designation="sxtrs" />
    <Card1 name="john" image={image} designation="sxtrs" />
    <Card1 name="john" image={image} designation="sxtrs" />
    <Card1 name="john" image={image} designation="sxtrs" />
    </div>
  )
}
