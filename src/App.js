import React from 'react'
import './App.css';
//import components

import Work from './Work'
import Education from './Education'
import Other from './other'

import General from './General';




class App extends React.Component {
constructor(){
  super()
  this.state = {
    
  }
  this.clickHandler = this.clickHandler.bind(this)
}
  clickHandler (){
    console.log('remove edit buttons')
  }
render() {
  return (
    <div className="App">
      <General />
      
      <Work />
     
      <Education />
     
      <Other />
     
      <div onClick={this.clickHandler}>Remove Edit Buttons</div>
    </div>
  );
}
};
export default App;
