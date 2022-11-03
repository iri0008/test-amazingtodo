import './App.css';
import { TextField } from "@mui/material";
import { useRef, useState } from 'react';
import React from 'react';
import {Button, ListItemSecondaryAction} from "@mui/material";

let counter = 0;
const css = {
  input: { color: "#fff" }
};

const myList = [];

function App() {

  const [items, setItems] = useState(myList);
  const [input, setInput] = useState("");

var inputRef = useRef();

  const addItem = () => {
    //var newItem2 = document.getElementById("outlined-basic").value;
    console.debug(inputRef);
    const updatedList = [...items, {id: counter, item: input}]; //spread operator
    setItems(updatedList);
    counter++;
  }
  //console.debug(items);

  return (
    <div className="App">
      <header className="App-header">  

        <div>
          <TextField id="outlined-basic" sx={css} value={input} onChange={e => setInput(e.target.value)} label="Add an item here.." variant="outlined" />
          <Button onClick={addItem} variant="contained">Add item </Button>
        </div>


        {items.map((e) => (
          <div>
            <li key={e.id}>{e.item}</li>
            </div>
        ))}

      </header>
    </div>
  );
}

export default App;
