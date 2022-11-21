import React from "react";
import "./style/coursepage.css";

export const UnderHeader = ({ header, secondaryHeader }) => {
  return (
    <div className="under-header">
      {secondaryHeader ? (
        <div className="under-header-secondary">{secondaryHeader}</div>
      ) : null}
      <div className="under-header-text">{header}</div>
    </div>
  );
};
