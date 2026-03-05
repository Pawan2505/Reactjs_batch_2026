import React from 'react'

const ComponentUI = ({count, increment}) => {
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>increment()}>INcrement</button>
    </div>
  )
}

export default ComponentUI
