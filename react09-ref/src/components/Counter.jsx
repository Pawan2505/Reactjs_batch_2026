import React, { useRef } from 'react'

const Counter = () => {

    const count = useRef(0);

    const handleCounter = ()=>{
        count.current = count.current+1;
        console.log("Clicked",count.current);
    }

  return (
    <div>
    {/* {count.current} */}
      <button onClick={handleCounter}>Increment</button>
    </div>
  )
}

export default Counter


// Note : useState and useRef both are used to state manage useState manage state on ui and useRef manage state on console or remind state .
// useState re-render component on change state but useRef not re-render componet on change state.
