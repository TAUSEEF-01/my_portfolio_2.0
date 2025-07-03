import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/themes.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        {/* ...existing code... */}
      </div>
    </ThemeProvider>
  );
}

export default App;
