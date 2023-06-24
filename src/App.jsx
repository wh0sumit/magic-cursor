import MagicCursor from "./components/MagicCursor.tsx";

function App() {
  return (
    <div className="App">
      <MagicCursor color="red" text="Hello World!">
        <h1>Text Magic Cursor</h1>
      </MagicCursor>
      <MagicCursor image="https://picsum.photos/200/300">
        <h1>Image Magic Cursor</h1>
      </MagicCursor>
    </div>
  );
}

export default App;

