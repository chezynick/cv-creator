import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false,

      name: [],
      from: [],
      to: [],
      duties: [],
      work: [
        ["GlossopDale Comp", "1989", "1992", "GCSE's"],
        ["GlossopDale Community College", "1992", "1994", "A-Levels"],
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
          <h3>Education</h3>
          <div className="schoolGrid">
            <h4>Learning Provider</h4>
            <h4>From</h4>
            <h4>To</h4>
            <h4>Qualifications</h4>
            {this.state.work.map((item) =>
              item.map((inner) => {
                return <div onClick={this.deleteHandler}>{inner}</div>;
              })
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
            <p>Click the name of a Learning Providor to Delete it</p>
            <button type="submit" class="submit" onClick={this.submitHandler}>
              Add/Close Form
            </button>
          </form>
        </div>
      );
    } else {
      if (this.props.edit) {
        return (
          <div className="other">
            <h3>Education</h3>
            <div className="schoolGrid">
              <h4>Learning Provider</h4>
              <h4>From</h4>
              <h4>To</h4>
              <h4>Qualifications</h4>
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
      } else {
        return (
          <div className="other">
            <h3>Education</h3>
            <div className="schoolGrid">
              <h4>Learning Provider</h4>
              <h4>From</h4>
              <h4>To</h4>
              <h4>Qualifications</h4>
              {this.state.work.map((item) =>
                item.map((inner) => {
                  return <div>{inner}</div>;
                })
              )}
            </div>
          </div>
        );
      }
    }
  }
}

export default Education;
