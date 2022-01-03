import React from "react";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const BioPageFooter = () => {
  return (
    <div className="flex justify-center">
      <Link to="/" className="text-xl font-semibold underline text-gray-400 hover:text-gray-400/80">
        Get your own gm.link <GrNext className="text-sm inline ml-1" />
      </Link>
    </div>
  );
};

export default BioPageFooter;
