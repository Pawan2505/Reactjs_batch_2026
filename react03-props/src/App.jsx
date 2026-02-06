import React from 'react'
import Header from './Header'

const App = () => {

  const fruits = ["Apple", "Banana","Orange","lichi"];

  return (
    <div>
      <Header username="Pawan Maurya" fruits={fruits}>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, repellat.</p>
         </Header>
    </div>
  )
}

export default App




