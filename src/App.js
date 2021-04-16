import React, { useState } from "react";
import Screen from "./Screen";

function App() {
  const [user] = useState({
    name: "mk-jung",
  });
  return (
    <>
      <Screen user={user} />
    </>
  );
}

export default App;
