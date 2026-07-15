import React from "react";

const Student = ({ name, college, semester }) => {
  //--->props pass
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>College: {college}</h2>
      <h2>Semester: {semester}</h2>
    </div>
  );
};

export default Student;
