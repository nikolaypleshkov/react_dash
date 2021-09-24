import React from 'react'
import { FormControlLabel, ThemeProvider } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFF00",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const CustomSwitch = () => {
    return (
        <div className="navbar-switch-container navbar-icons-container">
            <ThemeProvider theme={theme}>
              <FormControlLabel
                control={<Switch name="gilad" size="small" color="primary" />}
                label="Sandbox Mode"
              />
            </ThemeProvider>
          </div>
    )
}

export default CustomSwitch
