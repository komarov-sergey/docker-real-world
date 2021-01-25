import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const makeApiRequest = () => {
    console.log({ makeApiRequest });
    axios("/api/testwithcurrentuser").then((response) => {
      console.log({ response });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApiRequest}>make Api Request</button>
    </div>
  );
}

export default App;
