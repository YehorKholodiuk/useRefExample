import logo from './logo.svg';
import './App.css';
import Hover from "./Hover";
import React, {useRef} from "react";
import useHover from "./useHover";

function App() {
  const ref = useRef();
  const isBlackHovering = useHover(ref)
  return (
    <div className="App">
      <Hover/>
        <div ref = {ref} style={{width:300, height:300, background : isBlackHovering ? 'blue': 'black'}}>
        </div>
    </div>
  );
}

export default App;
