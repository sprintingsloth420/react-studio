import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// export default function CountButton() {
// 	const [count, setCount] = useState(0);
//
//   function handleClick(){
//     setCount(count + 1);
//   }
//
// 	return (
// 		<div>
//       <button onClick={handleClick}>Click Me!</button>
//       <h2>Current count: {count}</h2>
// 		</div>
//
// 	)
// }


function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        		<div>
              <button onClick={handleClick}>Click Me!</button>
              <h2>Current count: {count}</h2>
        		</div>
      </header>
    </div>
  );
}

export default App;
