import React from "react";

class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      showMe: false,

      name: [],
      from: [],
      to: [],
      duties: [],
      work: [
        ["heaven", "1984", "1986", "stuff"],
        ["hell", "1988", "1992", "things"],
      ],
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.nameAdd = this.nameAdd.bind(this);
    this.fromAdd = this.fromAdd.bind(this);
    this.toAdd = this.toAdd.bind(this);
    this.dutyAdd = this.dutyAdd.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
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
      const work = [
        ...state.work,
        [state.name, state.from, state.to, state.duties],
      ];

      return {
        work,
      };
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
  //delete handler
  deleteHandler(e) {
    this.setState((state) => {
      const work = state.work.filter((name) => name[0] !== e.target.innerText);
      console.log(work);
      return {
        work,
      };
    });
  }
  render() {
    if (this.state.showMe) {
      return (
        <div>
          <h3>Work Experience</h3>
          <div className="schoolGrid">
            <h4>Employer</h4>
            <h4>From</h4>
            <h4>To</h4>
            <h4>Duties</h4>
            {this.state.work.map((item) =>
              item.map((inner) => {
                return <div onClick={this.deleteHandler}>{inner}</div>;
              })
            )}
          </div>
          <form className="workForm">
            <label>Employer Name :</label>
            <input type="text" onChange={this.nameAdd} />
            <label>From date :</label>
            <input type="text" onChange={this.fromAdd} />

            <label>To date :</label>
            <input type="text" onChange={this.toAdd} />
            <label>Duties :</label>
            <input type="text" onChange={this.dutyAdd} />
            <p>Click the name of an Employer to remove that line</p>
            <button type="submit" class='submit'onClick={this.submitHandler}>
              Add/Close Form
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className='other'>
          <h3>Work Experience</h3>
          <div className="schoolGrid">
            <h4>Employer</h4>
            <h4>From</h4>
            <h4>To</h4>
            <h4>Duties</h4>
            {this.state.work.map((item) =>
              item.map((inner) => {
                return <div>{inner}</div>;
              })
            )}
            <button className="editButton" onClick={this.handleEdit}>
              Edit
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Work;
