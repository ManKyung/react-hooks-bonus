import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  console.log(name, loggedIn);
  return (
    <header>
      <div>Hello {name}</div>This is Header Component.
      <div>you are {loggedIn ? "login" : "not login"}</div>
    </header>
  );
};

export default Header;
