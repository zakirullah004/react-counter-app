import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='mainContainer'>
      <h1>Counter App</h1>

      <div id="counterBox">
        <h2 id='countValue'>10</h2>
        <div id="reset"><i className="bi bi-arrow-clockwise"></i></div>
        <div className='btns' id='plus'>+</div>
        <div className='btns' id='minus'>-</div>
      </div>
    </div>
  )
}

export default App
