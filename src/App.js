import React, { useState } from "react";
import "./App.css";
//import components

import Work from "./Work";
import Education from "./Education";
import Other from "./other";
import SideBar from "./sideBar";
import General from "./General";

const App = () => {

   const [display, setDisplay] = useState('')
 
  const clickHandler = () => {
    if(display === ''){
      setDisplay('none');
    }else{
      setDisplay('');
    }
    }
  
  
    return (
      <div className="App">
        <div className="sideBar">
          <SideBar edit={display}/>
        </div>
        <div className="headerBar">
          <General edit={display} />
        </div>

        <div className="container">
          <Work edit={display} />

          <Education edit={display} />

          <Other edit={display} />

          <div onClick={clickHandler}>Toggle Edit Buttons</div>
        </div>
      </div>
    );
  }

export default App;
