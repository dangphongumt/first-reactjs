import logo from './logo.svg';
import './App.css';
import carImage from './img/c92b4efe01ba41acb1170da3c85e7eca_1200.jpg'
// import shoppingList from './list/Products';
import ShoppingList from "./list/Products";
import { useState } from "react";

function App() {
    // let content;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my first app</h1>

        <MyButton/><MyButton/>
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
        <button className="App-button" onClick={handleClick}>This is a button</button>

        <img src= {carImage} className= "Car" alt={carImage}/>

      <img src={logo} className= "App-logo2" alt={logo}/>
      <ShoppingList/>
      </header>
    </div>

  );
}
function handleClick() {
    alert('You clicked me! How dare you!');
}
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
      setCount(count +1);
  }
  return (
      <button className= "App-button" onClick={handleClick}>
        Clicked {count} Add one
      </button>
  );
}

export default App;
