import React from "react";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      showMe: false,
      newWork: [],
      name: [],
      from: [],
      to: [],
      duties: [],
      work: [
        ["heaven", "1984", "1986", "stuff"],
        ["hell", "1988", "1992", "things"],
        ["thingy", "1992", "1998", "more stuff"],
        ["watsit", "1998", "2020", "too much stuff"],
      ],
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.nameAdd = this.nameAdd.bind(this);
    this.fromAdd = this.fromAdd.bind(this);
    this.toAdd = this.toAdd.bind(this);
    this.dutyAdd = this.dutyAdd.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  //edit and submit handlers
  handleEdit(e) {
    e.preventDefault();
    this.setState({ showMe: true });
  }
  submitHandler(e) {
    e.preventDefault();
    this.setState({ showMe: false });
    this.setState((state) => {
      const newWork = [state.name, state.from, state.to, state.duties];
      this.setState({name:''})
    this.setState((state) => {
      const work = [...state.work, newWork];
      
      return {
        work,
        newWork: "",
      };
      });
    });
  }

  //new work item handlers
  nameAdd(e) {
    this.setState({ name: e.target.value });
  }
  fromAdd(e) {
    this.setState({ from: e.target.value });
  }
  toAdd(e) {
    this.setState({ to: e.target.value });
  }
  dutyAdd(e) {
    this.setState({ duties: e.target.value });
  }

  render() {
    if (this.state.showMe) {
      return (
        <div>
          <h3>Education</h3>
          <div className='schoolGrid'>
              <h4>Learning Provider</h4>
              <h4>From</h4>
              <h4>To</h4>
              <h4>Qualifications</h4>
          {this.state.work.map((item) => item.map(inner => {
            return (
            <div >{inner}</div>
            )}
          )
          )}
          </div>
          <form className="workForm">
            <label>Learning Provider :</label>
            <input type="text" onChange={this.nameAdd} />
            <label>From date :</label>
            <input type="text" onChange={this.fromAdd} />
            <label>To date :</label>
            <input type="text" onChange={this.toAdd} />
            <label>Qualifications :</label>
            <input type="text" onChange={this.dutyAdd} />
            <button type="submit" onClick={this.submitHandler}>
              Add
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Education</h3>
          <div className='schoolGrid'>
              <h4>Learning Provider</h4>
              <h4>From</h4>
              <h4>To</h4>
              <h4>Qualifications</h4>
          {this.state.work.map((item) => item.map(inner => {
            return (
            <div >{inner}</div>
            )}
          )
          )}
          <button className="editButton" onClick={this.handleEdit}>Edit</button>

        </div>
        </div>
        )
            }
          }
        };
 

export default Education;
