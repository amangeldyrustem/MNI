import React from "react";
import { Header } from "./Header";
import { ModuleCard } from "./ModuleCard";
import { UnderHeader } from "./UnderHeader";
import "./style/coursepage.css";

export const CoursePage = ({ moduleContent, setWeek }) => {
  return (
    <div className="course-page">
      <Header />
      <UnderHeader header="Methodology of Scientific Research" />
      <div className="course-page-content">
        <ModuleCard setWeek={setWeek} content={moduleContent} />
      </div>
    </div>
  );
};
