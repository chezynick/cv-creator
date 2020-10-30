import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameEdit: ["Nick"],
      lastNameEdit: ["Chesterton"],
      emailEdit: ["Chezynickannie@yahoo.co.uk"],
      phoneEdit: ["01457 853625"],
      firstName: ["Nick"],
      lastName: ["Chesterton"],
      email: ["Chezynickannie@yahoo.co.uk"],
      phone: ["01457 853625"],
      showMe: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  //edit button and submit button change
  handleEdit(e) {
    e.preventDefault();
    this.setState({ showMe: true });
  }
  submitHandler(e) {
    e.preventDefault();
    this.setState({ showMe: false });
    this.setState((state) => {
      const firstName = [state.firstNameEdit];
      const lastName = [state.lastNameEdit];
      const email = [state.emailEdit];
      const phone = [state.phoneEdit];
      return {
        firstName,
        lastName,
        email,
        phone,
      };
    });
  }
  //textArea changes
  firstNameChange(e) {
    this.setState({ firstNameEdit: e.target.value });
  }
  lastNameChange(e) {
    this.setState({ lastNameEdit: e.target.value });
  }
  emailChange(e) {
    this.setState({ emailEdit: e.target.value });
  }
  phoneChange(e) {
    this.setState({ phoneEdit: e.target.value });
  }
  render() {
    if (this.state.showMe) {
      return (
        <div className="general">
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
          <h3>Email : {this.state.email}</h3>
          <h3>Phone : {this.state.phone}</h3>
          <form className="workForm">
            <label value="First Name:">First Name:</label>
            <input
              type="text"
              Value={this.state.firstName}
              onChange={this.firstNameChange}
            />
            <label value="Last Name:">Surname:</label>
            <input
              type="text"
              Value={this.state.lastName}
              onChange={this.lastNameChange}
            />
            <label value="Email:">Email: </label>
            <input
              type="text"
              Value={this.state.email}
              onChange={this.emailChange}
            />
            <label value="Phone:">Phone: </label>
            <input
              type="text"
              Value={this.state.phone}
              onChange={this.phoneChange}
            />
            <div></div>
            <button type="submit" class="submit" onClick={this.submitHandler}>
              Make Changes
            </button>
          </form>
        </div>
      );
    } else {
      if (this.props.edit) {
        return (
          <div className="other">
            <h1>
              {this.state.firstName} {this.state.lastName}
            </h1>
            <button className="editButton" onClick={this.handleEdit}>
              Edit
            </button>
            <h3>Email : {this.state.email}</h3>
            <h3>Phone : {this.state.phone}</h3>
          </div>
        );
      } else {
        return (
          <div className="other">
            <h1>
              {this.state.firstName} {this.state.lastName}
            </h1>

            <h3>Email : {this.state.email}</h3>
            <h3>Phone : {this.state.phone}</h3>
          </div>
        );
      }
    }
  }
}
export default General;
