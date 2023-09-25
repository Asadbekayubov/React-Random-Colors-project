import { useState } from "react";
import "./index.css";
import {getRandomColors} from "./Colors";
import Cards from "./components/Cards";


function App() {
  const [cardColors, setCardColors] = useState(getRandomColors);
  const [currentColor , setCurrentColor] = useState("No Color Selected")
  const changeColorBg = (color)=>{
    document.body.style.backgroundColor = color
    setCurrentColor(color)
  }
  function refresh(){
    setCardColors(getRandomColors)
  }
  return (
    <div>
      <h1>{currentColor}</h1>
      <Cards cardColors={cardColors} changeColorBg={changeColorBg}/>
      <button className="refresh-bnt" onClick={()=> refresh()}>Refresh</button>
    </div>
  );
}

export default App;
