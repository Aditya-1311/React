import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    //let counter1 =10;
    let [counter,setCounter]=useState(10)

    const addValue=()=>{
     
      if(counter<20)
      setCounter(counter+1)
      else
      setCounter(20)
    }
    const removeValue=()=>{
      // counter+=1
      if(counter>0)
       setCounter(counter-1)
      else
       setCounter(0)
 
     }



  return (
    <>
      <h1>Counter Program</h1>
      <h2>counter value : {counter}</h2>
      <br />
      <button onClick={
        addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
