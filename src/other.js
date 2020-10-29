import React from "react";

class Other extends React.Component {
  constructor() {
    super();
    this.state = {
      hobbieEdit: ["football"],
      skillsEdit: ["can make a box out of Origami"],
      achieveEdit: ["climbed Everest"],
      hobbies: ["football"],
      skills: ["can make a box out of Origami"],
      achievements: ["climbed Everest"],
      showMe: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.hobbieChange = this.hobbieChange.bind(this);
    this.skillChange = this.skillChange.bind(this);
    this.achieveChange = this.achieveChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  //edit button handler to open the form
  handleEdit(e) {
    e.preventDefault();
    this.setState({ showMe: true });
  }
  //submit button handler to commit changes made
  submitHandler(e) {
    e.preventDefault();
    this.setState({ showMe: false });
    this.setState((state) => {
      const hobbies = [state.hobbieEdit];
      const skills = [state.skillsEdit];
      const achievements = [state.achieveEdit];
      return {
        achievements,
        skills,
        hobbies,
      };
    });
  }
  //text area functions to collect edited data
  hobbieChange(e) {
    this.setState({ hobbieEdit: e.target.value });
  }
  skillChange(e) {
    this.setState({ skillsEdit: e.target.value });
  }
  achieveChange(e) {
    this.setState({ achieveEdit: e.target.value });
  }
  render() {
    if (this.state.showMe) {
      return (
        <div className="other">
        <h3>Other...</h3>
        <div> Hobbies: {this.state.hobbies}</div>
        <div> Skilz: {this.state.skills}</div>
        <div> Achievements: {this.state.achievements}</div>
       
        <form className="editOther">
          <label value="Hobbies:">Hobbies:</label>
          <input
            type="text"
            Value={this.state.hobbies}
            onChange={this.hobbieChange}
          />
          <label value="skills:">Skills:</label>
          <input
            type="text"
            Value={this.state.skills}
            onChange={this.skillChange}
          />
          <label value="Achievements:">Achievements:</label>
          <input
            type="text"
            Value={this.state.achievements}
            onChange={this.achieveChange}
          />
          <button type="submit" onClick={this.submitHandler}>
            Make Changes
          </button>
        </form>
        </div>
      );
    } else {
      return (
        <div className="other">
          <h3>Other...</h3>
          <div> Hobbies: {this.state.hobbies}</div>
          <button className="editButton" onClick={this.handleEdit}>
            Edit
          </button>
          <div> Skilz: {this.state.skills}</div>
          <div> Achievements: {this.state.achievements}</div>
         
         
        </div>
      );
    }
  }
}
export default Other;
