import type {} from "@mui/material/themeCssVarsAugmentation";
import { ThemeOptions, PaletteMode } from "@mui/material";
import { getDesignTokens } from "./themePrimitives";
import {
  buttonsCustomizations,
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
  inputsCustomizations,
  cardComponentsCustomizations,
  menuComponentsCustomizations,
  otherComponentsCustomizations,
  appbarComponentsCustomizations,
  tableComponentsCustomizations,
  tabComponentCustomizations,
} from "./customizations";

export default function getApplicationTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      ...buttonsCustomizations,
      ...inputsCustomizations,
      ...cardComponentsCustomizations,
      ...menuComponentsCustomizations,
      ...otherComponentsCustomizations,
      ...appbarComponentsCustomizations,
      ...tableComponentsCustomizations,
      ...tabComponentCustomizations,
    },
  };
}
