import { useTheme } from "../hooks/useTheme";

//styles
import "./ThemeSelector.css";

const themeColors = ["#2B2118", "#4f7543", "#B84A62"];

export default function ThemeSelector() {
  const {changeColor} = useTheme();

  return (
    <div className="theme-selector">
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
