import OriginalLayout from "@theme-original/Layout";

import { initializeIcons } from "@uifabric/icons";
import { loadTheme, createTheme, getTheme } from "@fluentui/react";

const currentTheme = getTheme();
const theme = createTheme({
  palette: {
    themePrimary: "#193153",
    themeLighterAlt: "#f1f4f8",
    themeLighter: "#cad5e4",
    themeLight: "#a1b3cc",
    themeTertiary: "#587398",
    themeSecondary: "#284369",
    themeDarkAlt: "#172d4c",
    themeDark: "#132640",
    themeDarker: "#0e1c2f",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#8ca1ba",
    neutralSecondary: "#6e87a3",
    neutralPrimaryAlt: "#536e8d",
    neutralPrimary: "#0e1f33",
    neutralDark: "#294360",
    black: "#1a3049",
    white: "#ffffff",
  },
  semanticColors: {
    navigationTop: "#193153", // Custom
    inputBackgroundChecked: "#FADB0F",
    primaryButtonBackground: "#FADB0F",
    primaryButtonBackgroundHovered: "#eecf04",
    primaryButtonBackgroundPressed: "#caaf03",
    primaryButtonText: currentTheme.semanticColors.bodyText,
    primaryButtonTextHovered: currentTheme.semanticColors.bodyText,
    primaryButtonTextPressed: currentTheme.semanticColors.bodyText,
  },
});

initializeIcons();
loadTheme(theme);

export default OriginalLayout;
