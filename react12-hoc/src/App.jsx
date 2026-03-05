import React from 'react'
import ComponentLogic from './components/ComponentLogic';
import ComponentUI from './components/ComponentUI';

const ComponentLogicUI = ComponentLogic(ComponentUI);
const App = () => {
  return (
    <div>
      <ComponentLogicUI/>
    </div>
  )
}

export default App
