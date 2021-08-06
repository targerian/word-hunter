import React from "react";
import "./Definitions.css";

function Definitions({ word, meanings, language, darkMode }) {
  return (
    <div className="definition-container">
      {meanings[0] && word && language === "en_US" && (
        <div
          className="audio-wrapper"
          style={{
            backgroundColor: "white",
          }}
        >
          <audio
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            controls
          >
            Your browser doesn't support audio files
          </audio>
        </div>
      )}
      {word === "" ? (
        <span className="subtitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((meanaya) =>
            meanaya.definitions.map((definition) => {
              console.log(definition);
              return (
                <div
                  className="single-mean"
                  style={{
                    backgroundColor: darkMode ? "white" : "#282c34",
                    color: darkMode ? "black" : "white",
                  }}
                >
                  <b className="heading-definition">{definition.definition}</b>
                  {definition.example && (
                    <span>
                      <b>Example: </b>
                      {definition.example}
                    </span>
                  )}
                  {definition.synonyms && (
                    <span>
                      <b>Synonyms: </b>
                      {definition.synonyms.map((s) => `${s}, `)}
                    </span>
                  )}
                </div>
              );
            })
          )
        )
      )}
    </div>
  );
}

export default Definitions;
