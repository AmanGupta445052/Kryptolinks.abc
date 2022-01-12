import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>404 Not Found</div>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
