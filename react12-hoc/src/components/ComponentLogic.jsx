import React, { useState } from 'react'

const ComponentLogic = (WrapperComponent) => {

const EnhanceComponet = ()=>{
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }

    return <WrapperComponent count={count} increment={increment} />
}

return EnhanceComponet;

}

export default ComponentLogic
