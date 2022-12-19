import React from "react";
import { Link } from "react-router-dom";

function Listitem({ listname, className, href }) {
  return (
    <li className={className}>
      <Link to={href}>{listname}</Link>
    </li>
  );
}

export default Listitem;
