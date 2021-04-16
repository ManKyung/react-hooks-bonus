import React from "react";
import Header from "./Header";

const Screen = ({ user }) => {
  return (
    <div>
      <Header user={user} />
      This is Screen Component
    </div>
  );
};

export default Screen;
