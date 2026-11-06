import React from "react";

const CourseItem = (props) => {
  console.log(props.title);

  return (
    <div>
      <div className="courseItem">

        <div className="courseLeft">
          <h2>Title: {props.title} </h2>
          <p>Duration: {props.duration}</p>
          <p>Description: {props.descr}</p>
        </div>

        <div className="courseRight">
          <img src="" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default CourseItem;
