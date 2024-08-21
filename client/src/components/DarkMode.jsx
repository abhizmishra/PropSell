import React, { useEffect, useState } from "react";
import "../App.css";
import { FaMoon ,FaSun} from "react-icons/fa";

function DarkMode() {
  const [theme, setTheme] = useState("light-theme");
  const [dark,setDark] = useState(true)

  useEffect(() => { 
    document.body.className = theme;
   },[theme])

  const toggleDarkMode = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setDark(true)
    }
    else {
      setTheme('light-theme');
    }
  };

  return (
    <div
      className={`flex flex-wrap justify-center h-auto w-auto mt-1 items-center theme rounded-full`}
    >
      <button onClick={toggleDarkMode}>
        {theme === "dark-theme" ? (
          <FaSun className="h-6 w-6" />
        ) : (
          <FaMoon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}

export default DarkMode;