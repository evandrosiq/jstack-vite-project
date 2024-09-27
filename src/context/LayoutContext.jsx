/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useThemeStorage } from "./hooks/useThemeStorage";

export const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const { currentTheme, themeString, toggleTheme } = useThemeStorage();

  return (
    <LayoutContext.Provider
      value={{
        currentTheme,
        themeString,
        onToggleTheme: toggleTheme,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
