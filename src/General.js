import React, { useState } from "react";

const General = ({ edit }) => {
  const [firstName, firstNameEdit] = useState("Nick");
  const [lastName, lastNameEdit] = useState("Chesterton");
  const [email, emailEdit] = useState("chyemail@yaho.com");
  const [phone, phoneEdit] = useState("01457 853625");
  const [showMe, setChange] = useState(false);

  //edit button and submit button change
  const handleEdit = () => {
    setChange(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setChange(false);
    firstNameEdit(firstNameEdit);
    lastNameEdit(lastNameEdit);
    emailEdit(emailEdit);
    phoneEdit(phoneEdit);
  };
  //textArea changes
  const firstNameChange = (e) => {
    firstNameEdit(e.target.value);
  };
  const lastNameChange = (e) => {
    lastNameEdit(e.target.value);
  };
  const emailChange = (e) => {
    emailEdit(e.target.value);
  };
  const phoneChange = (e) => {
    phoneEdit(e.target.value);
  };

  if (showMe === true) {
    return (
      <div className="general">
        <h1>
          {firstName} {lastName}
        </h1>
        <h3>Email : {email}</h3>
        <h3>Phone : {phone}</h3>
        <form className="workForm">
          <label value="First Name:">First Name:</label>
          <input type="text" Value={firstName} onChange={firstNameChange} />
          <label value="Last Name:">Surname:</label>
          <input type="text" Value={lastName} onChange={lastNameChange} />
          <label value="Email:">Email: </label>
          <input type="text" Value={email} onChange={emailChange} />
          <label value="Phone:">Phone: </label>
          <input type="text" Value={phone} onChange={phoneChange} />
          <div></div>
          <button type="submit" class="submit" onClick={submitHandler}>
            Make Changes
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="other">
        <h1>
          {firstName} {lastName}
        </h1>
        <button
          className="editButton"
          style={{ display: edit }}
          onClick={handleEdit}
        >
          Edit
        </button>
        <h3>Email : {email}</h3>
        <h3>Phone : {phone}</h3>
      </div>
    );
  }
};

export default General;
