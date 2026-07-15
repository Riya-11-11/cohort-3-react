import React, { useContext } from "react";
import Student from "./components/Student";
import { ThemeContext } from "./context/ThemeContext";
import Profile from "./components/Profile";
import { UserContext } from "./context/UserContext";

//<---props are given from here
const App = () => {
  const toggle = useContext(ThemeContext);

  const hobbies = ["Cricket", "Coding", "Music"];

  //without argument
  function greet() {
    return console.log("Welcome Riya");
  }

  //with argument
  function start(name) {
    return console.log("Let's start ", name);
  }

  return (
    <div
  style={{
    height: "100vh",
    overflow: "hidden",
    background: "#0f172a",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    color: "#ffffff",
    boxSizing: "border-box",
  }}
>
    <div
  style={{
    height: "calc(100vh - 60px)",
    maxWidth: "750px",
    margin: "auto",
    background: "#1e293b",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    boxSizing: "border-box",
    overflow: "hidden",
  }}
>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#38bdf8",
          }}
        >
          React Props & Context API
        </h1>

        {/* Theme Section */}
        <div
          style={{
            background: "#334155",
            padding: "18px",
            borderRadius: "12px",
            marginBottom: "25px",
            border: "1px solid #475569",
          }}
        >
          <h2>
            Current Theme:
            <span
              style={{
                color: "#22c55e",
                marginLeft: "10px",
              }}
            >
              {toggle.theme}
            </span>
          </h2>
        </div>


        {/* Student Component */}
        <div
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "25px",
            border: "1px solid #374151",
          }}
        >
          <Student
            name="Riya"
            college="IIT"
            semester="4"
            hobbies={hobbies}
            greet={greet}
            start={start}
          />
        </div>


        {/* Profile Context */}
        <div
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "15px",
            border: "1px solid #374151",
          }}
        >
          <UserContext.Provider
            value={{
              name: "Riya",
              city: "Kolkata",
              profession: "Student",
            }}
          >
            <Profile />
          </UserContext.Provider>
        </div>

      </div>
    </div>
  );
};

export default App;