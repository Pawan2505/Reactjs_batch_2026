import { useState } from "react"

export const CounterApp = ()=>{

    const [count, setCount] = useState(0);
    // useState(0); // --> for initial count 0
    // count -> current state value -> 0
    // setCount -> function to update the state value (count)

    const increment = ()=>{
        setCount(()=>count+1);
    }
    const decrement = ()=>{
        setCount(()=>count-1);
    }

    return(
        <>
        
        <h1>Counter Application</h1>
        <h2>You'r Count : {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        
        </>
    )
}