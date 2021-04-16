import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const {
    user: { name, loggedIn },
  } = useContext(UserContext);
  return (
    <header>
      <div>Hello {name}</div>This is Header Component.
      <div>you are {loggedIn ? "login" : "not login"}</div>
    </header>
  );
};

export default Header;
