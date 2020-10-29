import React from "react";

class Other extends React.Component {
    constructor(){
        super()
        this.state = {
          hobbies :['football'] ,
          skills :['can make a box out of Origami'],
          achievments: ['climbed Everest']
        }
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit() {
        console.log('got skilz innit')
    }
    render(){
         return (
              
                           <div className='other'>
                               <div> Hobbies: {this.state.hobbies}</div>
                               <div> Skilz: {this.state.skills}</div>
                               <div> Achievements: {this.state.achievements}</div>
            <button className='editButton' onClick={this.handleEdit}>Edit</button>
            </div>
           )
    };
        };
export default Other;