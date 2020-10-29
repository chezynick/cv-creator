import React from "react";

class General extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: ["Nick"],
      lastName: ["Chesterton"],
      email: ["Chezynickannie@yahoo.co.uk"],
      phone: ["01457 853625"],
    };
    this.handleEdit = this.handleEdit.bind(this)
  }
 handleEdit () {
        console.log('hello')  
      }
  render() {

    
    return (
      <div className='general'>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h3>Email : {this.state.email}</h3>
        <h3>Phone : {this.state.phone}</h3>
        <button className="editButton" onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}
export default General;
