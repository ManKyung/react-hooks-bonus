import React from "react";
import Header from "./Header";
import { useFns } from "./context";

const Screen = () => {
  const { logUserIn, logUserOut } = useFns();
  return (
    <div>
      <Header />
      This is Screen Component
      <button onClick={logUserIn}>Log User In</button>
      <button onClick={logUserOut}>Log User Out</button>
    </div>
  );
};

export default Screen;
