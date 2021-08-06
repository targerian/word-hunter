import { createTheme, TextField, ThemeProvider } from "@material-ui/core";
import React from "react";
import "./Header.css";
import MenuItem from "@material-ui/core/MenuItem";

function Header({ language, languages, setLanguge, word, setWord, darkMode }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: darkMode ? "#fff" : "#000",
      },
      type: darkMode ? "dark" : "light",
    },
  });
  const handleChange = (e) => {
    setLanguge(e.target.value);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunter"}</span>
      <div className="input">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search "
            label="Search a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          ></TextField>
          <TextField
            className="select"
            select
            label="Language"
            value={language}
            onChange={handleChange}
          >
            {languages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
