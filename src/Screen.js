import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "./context";

const Screen = () => {
  const { logUserIn } = useContext(UserContext);
  return (
    <div>
      <Header />
      This is Screen Component
      <button onClick={logUserIn}>Log User In</button>
    </div>
  );
};

export default Screen;
