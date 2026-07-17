import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageContext } from "./context/LanguageContext.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { MyStore } from "./context/StoreContext.jsx";
import { ArrContext } from "./context/ArrayContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageContext.Provider value="English">
    <ThemeContext.Provider value="Light">
      <MyStore.Provider
        value={{
          name: "Riya",
          age: 20,
          city: "Kolkata",
          college: "IIT",
          semester: 4,
        }}
      >
        <ArrContext.Provider value={["React", "Node", "MongoDB"]}>
          <App />
        </ArrContext.Provider>
      </MyStore.Provider>
    </ThemeContext.Provider>
  </LanguageContext.Provider>,
);
