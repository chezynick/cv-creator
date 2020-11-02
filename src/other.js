import React,{useState} from "react";

const Other = ({edit}) => {

     const[hobbies, setHobbie]=useState ("Cycling, photography, gastronomy and wine making")
     const [skills, setSkill] =useState("can make a box out of Origami")
     const [achieve, setAchieve]= useState("climbed Everest (in Zwift)")
      const [showMe,setChange] =useState(false);

  //edit button handler to open the form
  const handleEdit=(e) =>{
    e.preventDefault();
    setChange(true );
  }
  //submit button handler to commit changes made
  const submitHandler=(e) =>{
    e.preventDefault();
    setChange(false);
    setHobbie(setHobbie);
    setSkill(setSkill);
    setAchieve(setAchieve);
  }
  //text area functions to collect edited data
  const hobbieChange = (e) =>{
    setHobbie(e.target.value );
  }
  const skillChange = (e) =>{
    setSkill(e.target.value );
  }
  const achieveChange = (e) => {
    setAchieve(e.target.value );
  }
  
    if (showMe) {
      return (
        <div className="other">
          <h3>Other...</h3>
          <div> Hobbies: {hobbies}</div>
          <div> Skilz: {skills}</div>
          <div> Achievements: {achieve}</div>

          <form className="workForm">
            <label value="Hobbies:">Hobbies:</label>
            <input
              type="text"
              Value={hobbies}
              onChange={hobbieChange}
            />
            <label value="skills:">Skills:</label>
            <input
              type="text"
              Value={skills}
              onChange={skillChange}
            />
            <label value="Achievements:">Achievements:</label>
            <input
              type="text"
              Value={achieve}
              onChange={achieveChange}
            />
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
            <h3>Other...</h3>
            <div> Hobbies: {hobbies}</div>
            <button className="editButton" style={{display:edit}} onClick={handleEdit}>
              Edit
            </button>
            <div> Skilz: {skills}</div>
            <div> Achievements: {achieve}</div>
          </div>
        );
    
    }
  }

export default Other;
