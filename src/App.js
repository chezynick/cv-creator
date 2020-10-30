import React from "react";
import "./App.css";
//import components

import Work from "./Work";
import Education from "./Education";
import Other from "./other";
import SideBar from "./sideBar";
import General from "./General";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      editButtonView: true,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState(prevState => ({
      editButtonView: !prevState.editButtonView
    }));
  
  }
  render() {
    return (
      <div className="App">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="headerBar">
          <General edit={this.state.editButtonView} />
        </div>

        <div className="container">
          <Work edit={this.state.editButtonView} />

          <Education edit={this.state.editButtonView} />

          <Other edit={this.state.editButtonView} />

          <div onClick={this.clickHandler}>Toggle Edit Buttons</div>
        </div>
      </div>
    );
  }
}
export default App;
