import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";
import { ThemeContext } from "./context/ThemeContext";
import { MyStore } from "./context/StoreContext";

const App = () => {
  const language = useContext(LanguageContext);
  const theme = useContext(ThemeContext);
  const user = useContext(MyStore)
  return (
    <div>
      <h2>Theme: {theme}</h2>
      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>Current Language: {language}</h3>
    </div>
  );
};

export default App;
