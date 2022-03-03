import { IconButton, useColorMode } from "theme-ui";

const ColorSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <IconButton
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
      title="Switch color mode"
      sx={{
        variant: "themeToggler",
        "@media screen and (max-width: 1024px)": {
          display: "none",
        },
      }}
    >
      <i class="bx bx-toggle-left change-theme" id="theme-button"></i>
    </IconButton>
  );
};

export default ColorSwitcher;
