import React from "react";

const ErrorePage = ({ setHideHeader }) => {
  setHideHeader(true);
  return (
    <div className="text-center text-lg pt-10 font-bold">Page not found</div>
  );
};

export default ErrorePage;
