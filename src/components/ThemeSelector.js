import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";

//styles
import "./ThemeSelector.css";

const themeColors = ["#2B2118", "#4f7543", "#B84A62"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };
  console.log(mode);

  return (
    <div className={`theme-selector ${mode}`}>
      <div className="mode-toggle">
        <p className="theme-title mode-title">Light/dark mode:</p>
        <img onClick={toggleMode} src={modeIcon} alt="dark/light toggle icon" 
        style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}/>
      </div>
      <div className="theme-buttons">
        <p className="theme-title">Colour scheme:</p>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
