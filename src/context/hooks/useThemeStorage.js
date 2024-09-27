import { useState, useEffect } from "react";
import theme from "../../styles/themes";

function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem("Theme");
    return storedTheme || "dark";
  } catch (error) {
    console.error("Failed to get theme:", error);
    return "dark";
  }
}

export const useThemeStorage = () => {
  const [themeString, setThemeString] = useState(getStoredTheme);

  useEffect(() => {
    localStorage.setItem("Theme", themeString);
  }, [themeString]);
  
  const currentTheme = themeString === "dark" ? theme.dark : theme.light;
  
  const toggleTheme = () => {
    setThemeString(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { currentTheme, themeString, toggleTheme };
};
