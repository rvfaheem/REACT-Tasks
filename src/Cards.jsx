import React from 'react'

const Cards = (props) => {



  return (
    <div className={props.cls}>
<h2>title:{props.title}</h2>
<p>Body: {props.body}</p>
<img src={props.img} alt="" />
    </div>
  )
}

export default Cards