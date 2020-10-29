import React from "react";

const Education = () => {
  const schools = [
    { name: "heaven", from: "1984", to: "1986" },
    { name: "hell", from: "1988", to: "1992" },
    { name: "thingy", from: "1992", to: "1998" },
    { name: "watsit", from: "1998", to: "2020" },
  ];
  function sayHello() {
    console.log("hi there!");
  }
  const result = schools.map((item) => {
    return (
      <div className="schoolList">
        <div width="100px;">{item.name}</div>
        <div> from: {item.from}</div>
        <div>To: {item.to}</div>
      </div>
    );
  });
  return (
    <div className='education'>
      <div className='school'>{result}</div>
      <button className="editButton" onClick={sayHello}>
        Edit
      </button>
    </div>
  );
};
export default Education;
