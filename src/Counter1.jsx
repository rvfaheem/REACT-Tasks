import React, { useState } from 'react'

export const Counter1 = () => {
    const [count,setcount]=useState(0)
    const [data,setdata]=useState([])

    let adddata=()=>{
        
        setdata([
            {
                name:'asd',
                age:34
            },
            {
                name:'asd',
                age:34
            }
        ])
    }

    
    

    let increment=()=>{
        setcount(count+1)
    }
    let decrement=()=>{
        if(count!=0){
        setcount(count-1)
    }
    }
    
    

  return (
    <div>
        <h2>{count}</h2><br />
        {data.map((item)=>(
            <div>
                <h2>{item.name}</h2>
                <h2>{item.age}</h2>
            </div>
            ))}
        <button onClick={increment}>Increment</button><br /> 
        <button onClick={decrement}>Decrement</button><br />
        {/* <h2>{data}</h2> */}

        <button onClick={adddata}>Add data</button>
    </div>
  )
}
