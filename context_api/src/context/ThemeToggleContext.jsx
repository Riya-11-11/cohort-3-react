import { createContext } from "react";
import { useState } from "react";

export const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  return (
    <ToggleContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  );
}
