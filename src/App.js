import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "🙂": "Slightly Smiling Face",
  "🤔": "Thinking Face",
  "😐": "Neutral Face",
  "😏": "Smirking Face",
  "😌": "Relieved Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  //function to handle user input
  function emojiinputHandler() {
    var userInput = event.target.value;
    var mean = emojiDictionary[userInput];

    if (mean === undefined) {
      var mean = "😐 emoji not in our Database";
    }
    // console.log(emojiDictionary[mean]);
    setmeaning(mean);
  }

  //emojiClick handler
  function emojiCLickHandler(emoji) {
    var emojiClick = emojiDictionary[emoji];
    setmeaning(emojiClick);
  }

  return (
    <div className="App">
      <h1>
        hello Emoji <span>🙂</span>
      </h1>
      <input
        class="input-emoji"
        placeholder={"Search your emoji"}
        onChange={emojiinputHandler}
      ></input>
      <div className="emoji-meaning">
        <h2>{meaning}</h2>
      </div>

      <div className="emojisweknow">
        <h3>emojis we know</h3>
      </div>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiCLickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
