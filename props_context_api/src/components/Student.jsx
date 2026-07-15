import React from "react";

const Student = ({ name, college, semester, hobbies, greet, start }) => {
  //--->props pass
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>College: {college}</h2>
      <h2>Semester: {semester}</h2>
      <h3>My Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
      {/* //without argument */}
      <button onClick={greet}>Greet</button>
      {/* //with argument */}
      <button onClick={() => start("Riya")}>Get Started</button>
    </div>
  );
};

export default Student;
