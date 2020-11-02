import React, { useState } from "react";

const Work = ({ edit }) => {
  const [showMe, setChange] = useState(false);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [duties, setDuties] = useState("");
  const [work, setWork] = useState([
    ["Barrats", "1995", "2004", "getting off with Anne in the stock room"],
    ["STA Travel", "2006", "2020", "playing Fifa and going on holidays"],
  ]);

  //edit and submit handlers
  const handleEdit = (e) => {
    e.preventDefault();
    setChange(true);
  };
  function submitHandler(e) {
    e.preventDefault();
    setChange(false);
    setWork([...work, [name, from, to, duties]]);
  }

  //new work item handlers
  function nameAdd(e) {
    setName(e.target.value);
  }
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
        <h3>Work Experience</h3>
        <div className="schoolGrid">
          <h4>Employer</h4>
          <h4>From</h4>
          <h4>To</h4>
          <h4>Duties</h4>
          {work.map((item) =>
            item.map((inner) => {
              return <div onClick={deleteHandler}>{inner}</div>;
            })
          )}
        </div>
        <form className="workForm">
          <label>Employer Name :</label>
          <input type="text" onChange={nameAdd} />
          <label>From date :</label>
          <input type="text" onChange={fromAdd} />

          <label>To date :</label>
          <input type="text" onChange={toAdd} />
          <label>Duties :</label>
          <input type="text" onChange={dutyAdd} />
          <p>Click the name of an Employer to remove that line</p>
          <button type="submit" class="submit" onClick={submitHandler}>
            Add/Close Form
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="other">
        <h3>Work Experience</h3>
        <div className="schoolGrid">
          <h4>Employer</h4>
          <h4>From</h4>
          <h4>To</h4>
          <h4>Duties</h4>
          {work.map((item) =>
            item.map((inner) => {
              return <div>{inner}</div>;
            })
          )}
          <button
            className="editButton"
            onClick={handleEdit}
            style={{ display: edit }}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
};

export default Work;
