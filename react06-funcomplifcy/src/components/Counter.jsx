import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("componentDidMount")

        return(
            console.log(" componentWillUnmount")

        )
    },[])
  
    useEffect(()=>{
        console.log("componentDidUpdate")
    },[count])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  )
}

export default Counter


// Functional component Life cycle methods using useEffect
// 1. componentDidMount -> useEffect(()=>{},[])
// 2. componentDidUpdate -> useEffect(()=>{}) or useEffect(()=>{},[state/props])
// 3. componentWillUnmount -> useEffect(()=>{ return ()=>{}} ,[])

