import logo from "./logo.svg";
import "./App.css";
import MagicCursor from "./components/MagicCursor.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MagicCursor image={logo} imageHeight="100px">
          <button>Button</button>
          <div>Custom Cursor</div>
        </MagicCursor>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

