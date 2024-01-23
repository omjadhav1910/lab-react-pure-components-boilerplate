import React from 'react'
import './App.css'

import SimpleComponentCounter from './components/SimpleCounterComponent'
import PureComponentCounter from './components/PureCounterComponent'


function App() {

  return (
    <>
     <SimpleComponentCounter/>
     <PureComponentCounter/>
    </>
  )
}

export default App