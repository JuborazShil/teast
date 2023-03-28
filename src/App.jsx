import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../src/Component/Header.jsx";
import Header from "../src/Component/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App
