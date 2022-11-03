import './App.css';
import {TextField} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <TextField id="outlined-basic" label="Add an item here.." variant="outlined" />
          <button>Click me</button>
        </div>
      </header>
    </div>
  );
}

export default App;
