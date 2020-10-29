import React from 'react'
import './App.css';
//import components

import Work from './Work'
import Education from './Education'
import Other from './Other'

import General from './General';




class App extends React.Component {

  
render() {
  return (
    <div className="App">
      <General />
      
      <Work />
     
      <Education />
     
      <Other />
     
      
    </div>
  );
}
};
export default App;
