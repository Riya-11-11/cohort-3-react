import React, { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { ThemeContext } from "./context/ThemeContext";
import { MyStore } from "./context/StoreContext";
import { ArrContext } from "./context/ArrayContext";
import { ObjectArr } from "./context/ObjectArrContext";
import { ToggleContext } from "./context/ThemeToggleContext";

const App = () => {
  const language = useContext(LanguageContext);
  // const theme = useContext(ThemeContext);
  // const user = useContext(MyStore);
  const { name, age, city, college, semester } = useContext(MyStore); //destructure way
  const arr = useContext(ArrContext);
  const Obj = useContext(ObjectArr);
 const {theme, toggleTheme} = useContext(ToggleContext)

  return (
    <div>
      {/* <h2>Theme: {theme}</h2> */}
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>City: {city}</h3>
      <h3>College: {college}</h3>
      <h3>Semester: {semester}</h3>
      <h3>Current Language: {language}</h3>
      {/* <h3>
        {arr.map((val) => {
          console.log(val);
        })}
      </h3> */}

      {arr.map((val, index) => (
        <p key={index}>{val}</p>
      ))}

      {Obj.map((val) => (
        <p key={val.id}>{val.name}</p>
      ))}

      <button onClick={() => toggleTheme()}>{theme}</button>
    </div>
  );
};

export default App;
