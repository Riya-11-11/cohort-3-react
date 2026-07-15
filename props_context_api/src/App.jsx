import React from "react";
import Student from "./components/Student";

//<---props are given from here
const App = () => {
  return (
    <div>
      <Student name="Riya" college="IIT" semester="4" />
    </div>
  );
};

export default App;
