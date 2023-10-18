import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SpineAnimation from "./components/SpineAnimate";
import boxJson from "./assets/Box_1.json";
import boxImg from "./assets/Box_1.png";
import MyPixiComponent from "./components/SpineAnimate";
import PixiSpineComponent from "./components/SpineAnimate";
import Character from "./components/SpineAnimate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Character />
    </div>
  );
}

export default App;
