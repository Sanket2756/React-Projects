import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(0);
  const [msg, setMsg] = useState("");

  const addVal = () => {
    // if(value >= 20){
    //   setMsg("Value cannot go above 20");
    //   return;
    // }
    setValue(value + 1);
    console.log(value);
    setMsg("");
  }

  const subVal = () => {
    // if(value <= 0){
    //   setMsg("Don't go below 0");
    //   return;
    // }
    setValue(value - 1);
    console.log(value);
    
    setMsg("");
  }

  return (
    <div>
    <span>
      <button onClick={addVal}>add</button>
      <h1>The Counter Value : {value}</h1>
      <button onClick={subVal}>dec</button>
    </span>


      <p>{msg}</p>
    </div>
  )
}

export default App;