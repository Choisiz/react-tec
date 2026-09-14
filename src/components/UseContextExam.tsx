import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";
import ThemedBox from "../contexts/ThemedBox";

const ThemeToggleButton = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { toggleTheme } = themeContext;
  return <button onClick={toggleTheme}> 테마전환</button>;
};

export default function UseContextExam() {
  return (
    <>
      <h2>useContext 사용하기</h2>
      <ThemeProvider>
        <ThemeToggleButton />
        <ThemedBox />
      </ThemeProvider>
    </>
  );
}
