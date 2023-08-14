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
    <div className="theme-selector">
      <div className="mode-toggle">
        <img onClick={toggleMode} src={modeIcon} alt="" />
      </div>
      <div className="theme-buttons">
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
