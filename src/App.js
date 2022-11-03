import logo from './logo.svg';
import './App.css';

function App() {
  const myList = ["bade", "dusje"];


  return (
    <div className="App">
      <header className="App-header">
        <button>Click me</button>
        
        {myList.map((myList) => <li>{myList}</li>)}

      </header>
    </div>
  );
}

export default App;
