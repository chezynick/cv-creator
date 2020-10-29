import React from "react";

class Work extends React.Component {
    constructor(){
        super()
        this.state = {
          workName :['heaven'] ,
          workFrom :[1970],
          workTo: [2020]
        }
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit() {
        console.log('clicked')
    }
    render(){
         return (
              
                           <div className='work'>
                               <div> Company Name: {this.state.workName}</div>
                               <div> From: {this.state.workFrom}</div>
                               <div> To: {this.state.workTo}</div>
            <button className='editButton' onClick={this.handleEdit}>Edit</button>
            </div>
           )
    };
        };
                
                
export default Work