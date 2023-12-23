import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SimpleCounterComponent from './SimpleCounterComponent'
import './App.css'
import PureCounter from './PureCounter'
// import PureCounter from './PureCounter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < SimpleCounterComponent />
      <PureCounter/>
    </>
  )
}

export default App
