import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

// 单条技能的复用进度条组件。
function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      />
    </div>
  );
}

export default SkillsBar;
