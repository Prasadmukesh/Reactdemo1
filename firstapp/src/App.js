import logo from './logo.svg';
import './App.css';
import tgc from './tgc.png';

import { useState, useEffect } from "react";
function App() {
   const [count, setCount] = useState(0);

   

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return(
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to my Fisrt React Application</h1>
      </header>
 
      {/* <img src={logo} alt="logo" style={{height:"200px",width:"200px"}}/> */}
      <img src={tgc} alt="tgc" style={{height:"200px",width:"200px",padding:"5px"}}/>
      
    <h1>I've rendered {count} times!</h1>
    <footer className='App-footer'>
      <h3>Developed by: Mukesh Sir Tgc Pitampura</h3>
    </footer>
    </div>
  )
   
  
}

export default App;
