import React from "react";
import { Link } from "./Link";
import "./style/coursepage.css";

export const ModuleCard = ({ content, setWeek }) => {
  const renderedContent = content.map((item, index) => {
    return (
      <div onClick={() => setWeek(item)} key={index}>
        <Link href={`/module/${item.num}`}>
          <div className="module-content">
            <div className="ui segment">
              <div className="module-header">
                <div>{item.header}</div>
                <div>{item.week}</div>
              </div>
              <div className="ui clearing divider"></div>
              <p className="module-text">
                <span>Description: </span>
                {item.text}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="module-wrapper">{renderedContent}</div>;
};
