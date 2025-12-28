import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  //let counter = 5;

  const addValue = () => {
    //console.log("clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1)

    /* //Use of Callback concept i.e., next step is counted after the completion of previous step
    // here state is taken into consideration
    //setCounter((prevCounter) => {prevCounter + 1}) -- setcounter have a callback method in it
    setCounter(PrevCounter => PrevCounter + 1)
    setCounter(PrevCounter => PrevCounter + 1)
    setCounter(PrevCounter => PrevCounter + 1)
    setCounter(PrevCounter => PrevCounter + 1) */
  }

  const removeValue = () => {
    // counter = counter + 1;
    setCounter(counter - 1)
    //console.log("clicked", counter);
  }

  const reset = () => {
    setCounter(0);
  }
  return (
    <>
     <h1>React Basics</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br/>
     <button onClick={removeValue}>Remove value</button>
     <br/>
     <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
