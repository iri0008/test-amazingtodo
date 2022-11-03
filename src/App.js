import './App.css';
import { TextField } from "@mui/material";
import { useState } from 'react';
import React from 'react';
import {Button, ListItemSecondaryAction} from "@mui/material";

const myList = ["bade", "dusje"];

function App() {

  const [item, setItem] = useState(myList);

  const addItem = () => {
  var newItem = document.getElementById("outlined-basic").value;
    setItem(newItem);
    myList.push(newItem);
    console.log(myList);
  }

  return (
    <div className="App">
      <header className="App-header">  

        <div>
          <TextField id="outlined-basic" label="Add an item here.." variant="outlined" />
          <Button onClick={addItem} variant="contained">Add item </Button>
        </div>

        <p> Oppgave lagt til: {item} </p>
        
        {myList.map((item) => (
          <li>{item}</li>
        ))}

      </header>
    </div>
  );
}

export default App;
