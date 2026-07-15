import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContext.Provider value={{theme:"dark"}}>
    <App />
  </ThemeContext.Provider>,
);
