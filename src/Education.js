import React, { useState } from "react";

const Education = ({ edit }) => {
  const [showMe, setChange] = useState(false);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [duties, setDuties] = useState("");
  const [work, setWork] = useState([
    ["GlossopDale Comp", "1989", "1992", "GCSE's"],
    ["GlossopDale Community College", "1992", "1994", "A-Levels"],
  ]);

  //edit and submit handlers
  const handleEdit = (e) => {
    e.preventDefault();
    setChange(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setChange(false);
    setWork([...work, [name, from, to, duties]]);
  };

  //new work item handlers
  const nameAdd = (e) => {
    setName(e.target.value);
  };
  const fromAdd = (e) => {
    setFrom(e.target.value);
  };
  const toAdd = (e) => {
    setTo(e.target.value);
  };
  const dutyAdd = (e) => {
    setDuties(e.target.value);
  };
  //delete handler
  const deleteHandler = (e) => {
    setWork(work.filter((name) => name[0] !== e.target.innerText));
  };

  if (showMe === true) {
    return (
      <div>
        <h3>Education</h3>
        <div className="schoolGrid">
          <h4>Learning Provider</h4>
          <h4>From</h4>
          <h4>To</h4>
          <h4>Qualifications</h4>
          {work.map((item) =>
            item.map((inner) => {
              return <div onClick={deleteHandler}>{inner}</div>;
            })
          )}
        </div>
        <form className="workForm">
          <label>Learning Provider :</label>
          <input type="text" onChange={nameAdd} />
          <label>From date :</label>
          <input type="text" onChange={fromAdd} />
          <label>To date :</label>
          <input type="text" onChange={toAdd} />
          <label>Qualifications :</label>
          <input type="text" onChange={dutyAdd} />
          <p>Click the name of a Learning Providor to Delete it</p>
          <button type="submit" class="submit" onClick={submitHandler}>
            Add/Close Form
          </button>
        </form>
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
          {work.map((item) =>
            item.map((inner) => {
              return <div>{inner}</div>;
            })
          )}
          <button
            className="editButton"
            style={{ display: edit }}
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
};

export default Education;
