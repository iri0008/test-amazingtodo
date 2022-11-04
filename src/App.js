import "./App.css";
import { TextField } from "@mui/material";
import { useRef, useState } from "react";
import React from "react";
import { Button, FormGroup, Checkbox, FormControlLabel } from "@mui/material";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

let counter = 0;
const css = {
  input: {
    color: "black",
    height: "6px",
  },
};

const myCSS = {
  background: "#fff",
  width: "60%",
  height: "800px",
  borderRadius: "4rem",
  color: "black",
};

const styleInput = {
  paddingTop: "2rem",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
};

const myList = [];

function App() {
  const [items, setItems] = useState(myList);
  const [input, setInput] = useState("");

  var inputRef = useRef();

  const addItem = () => {
    //var newItem2 = document.getElementById("outlined-basic").value;
    console.debug(inputRef);
    const updatedList = [...items, { id: counter, item: input }]; //spread operator
    setItems(updatedList);
    counter++;
  };
  //console.debug(items);

  return (
    <div className="App">
      <header className="App-header">
        <div className="listForm" style={myCSS}>
          <div style={styleInput}>
            <React.Fragment style={{ paddingTop: "2rem" }}>
              <TextField
                id="outlined-basic"
                sx={css}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                label="Add an item here.."
                variant="outlined"
              />
            </React.Fragment>
            <div>
              <Button onClick={addItem} variant="contained">
                Add item{" "}
              </Button>
            </div>
          </div>

          <FormGroup>
            {items.map((e) => (
              <FormControlLabel
                control={<Checkbox default />}
                label={e.item}
                key={e.id}
              />
            ))}
          </FormGroup>
        </div>
      </header>
    </div>
  );
}

export default App;
