import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [count, setCount] = useState(0)


  function increamentCount() {
    setCount((s) => s + 1)
  }
  function decreamentCount() {
    setCount((s) => s - 1)
  }

  function resetCount(){
    setCount(0)
  }

  return (
    <div id='mainContainer'>
      <h1>React</h1>
      <h1>Counter App</h1>

      <div id="counterBox">
        <h2 id='countValue'>{count}</h2>
        <div onClick={resetCount} id="reset"><i className="bi bi-arrow-clockwise"></i></div>
        <div onClick={increamentCount} className='btns' id='plus'><i class="bi bi-plus"></i></div>
        <div onClick={decreamentCount} className='btns' id='minus'><i class="bi bi-dash"></i></div>
      </div>
    </div>
  )
}

export default App
