import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  //useState --->app ko re-render krta h
  let [count, setCount] = useState(0); //jo usestate k argument me pass hoga wo state ka initial value hoga
  console.log(count);

  return (
    <div>
      <h1>Count is - {count}</h1>

      <button
        onClick={() => {
          setCount(count + 1); //or ++count
        }}
      >
        Increment
      </button>

      {/* <Navbar />
      <Hero />
      <Footer /> */}
    </div>
  );
};

export default App;
