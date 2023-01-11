
import Formular from "./Formular.jsx"
import './App.css';
import Counter from "./Counter.jsx"
import Input from "./Input.jsx"
import { useState } from 'react';

function App() {
  const [counter, SetCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <Counter counter={counter} SetCounter={SetCounter}/><Input counter={counter} SetCounter={SetCounter}/>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
