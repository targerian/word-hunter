import axios from "axios";
import "./App.css";
import { useEffect, useState, useCallback } from "react";
import { Container, withStyles, Switch } from "@material-ui/core";
import Header from "./components/header/Header";
import Definitions from "./components/definitions/Definitions";
import { grey } from "@material-ui/core/colors";

//we are going to fetch the dictionary API using a package called Axios!
const languages = [
  {
    value: "en_US",
    label: "English (US)",
  },
  {
    value: "hi",
    label: "Hindi",
  },
  {
    value: "es",
    label: "Spanish",
  },
  {
    value: "fr",
    label: "French",
  },
  {
    value: "ja",
    label: "Japanese",
  },
  {
    value: "ru",
    label: "Russian",
  },
  {
    value: "en_GB",
    label: "English uk",
  },
  {
    value: "de",
    label: "German",
  },
  {
    value: "it",
    label: "Italian",
  },
  {
    value: "ko",
    label: "Korean",
  },
  {
    value: "pt-BR",
    label: "Brazilian Portuguese",
  },
  {
    value: "ar",
    label: "Arabic",
  },
  {
    value: "tr",
    label: "Turkish",
  },
];
function App() {
  //state for the language
  const [language, setLanguge] = useState("en_US");
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const ThemeSwitch = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = useCallback(async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [word, language]);
  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, [word, language, dictionaryApi]);
  return (
    <div
      className="app"
      style={{
        height: "100vh",
        backgroundColor: darkMode ? "#282c34" : "white",
        color: darkMode ? "white" : "black",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div className="switch-dark-mode">
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
          <ThemeSwitch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
        <Header
          language={language}
          setLanguge={setLanguge}
          languages={languages}
          word={word}
          setWord={setWord}
          darkMode={darkMode}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            language={language}
            darkMode={darkMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
