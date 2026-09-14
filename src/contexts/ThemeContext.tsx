import { createContext, useState, type ReactNode } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
