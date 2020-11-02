import React,{useState} from "react";

const SideBar = ({edit}) => {
  const [showMe,setChange] =useState(false);
  const [photo,setPhoto] = useState ('https://www.gdnonline.com/gdnimages/20161122/201611221138141.JPG')
//handles edit button click
  const handleEdit = (e) => {
    setChange(true)
    }
  //captures input from text area
   const photoEdit=(e) => {
      setPhoto(e.target.value)
   }
   //handles submit button click
   const handleSubmit = (e) =>{
e.preventDefault()
setChange(false)
setPhoto(setPhoto)

   }

  if(showMe) {
    return (
            <div>
        <img src={photo}/>
        <form className='photoForm'>
        <label>Enter Photo URL here</label>
        <input type='text' onChange={photoEdit}/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
        <div className= 'filler'></div>
        </div>
    )
  } else {
    return (
      <div>
  <img src={photo}/>
  <button className="photoEditButton" style={{display:edit}} onClick={handleEdit}>
        Edit
      </button>
  <div className= 'filler'></div>
  </div>
)
  }
  }
     
    
  

export default SideBar;