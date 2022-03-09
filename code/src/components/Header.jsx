import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.type}</h1>
    </header>
  )
}

export default Header
