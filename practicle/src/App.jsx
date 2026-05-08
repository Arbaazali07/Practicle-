import { useState } from 'react'
import './App.css'
import PropsComponent from './Components/PropsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <PropsComponent name="Arbaaz" age={19} />
    </>
  )
}

export default App
