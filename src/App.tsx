import React from "react";

import spriteArray from "./utils/spriteMap";
import Card from "./components/Card";

function App(): React.ReactElement {
  return (
    <div className="bg-black min-h-screen flex justify-around items-center flex-wrap">
      {spriteArray.map((sprite) => (
        <Card spriteName={sprite.spriteName} imgSrc={sprite.imgUrl} />
      ))}
    </div>
  );
}

export default App;
