import './App.css';
import {TextField} from "@mui/material";

function App() {
  const myList = ["bade", "dusje"];


  return (
    <div className="App">
      <header className="App-header">  
        <div>
          <TextField id="outlined-basic" label="Add an item here.." variant="outlined" />
          <button>Click me</button>
        </div>
        
        {myList.map((myList) => <li>{myList}</li>)}
      </header>
    </div>
  );
}

export default App;
