import { useContext, type CSSProperties } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemedBox() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { isDark } = themeContext;
  const boxStyle: CSSProperties = {
    padding: "20px",
    marginTop: "10px",
    backgroundColor: isDark ? "#333" : "#eee",
    color: isDark ? "#fff" : "#000",
    textAlign: "center",
  };
  return (
    <>
      <div style={boxStyle}>현재테마: {isDark ? "다크모드" : "라이트모드"}</div>
    </>
  );
}
