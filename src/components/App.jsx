import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emoji => (
      <Entry
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      desc={emoji.meaning}
    />
    ))}
    </dl>
    </div>
  );
}

export default App;
