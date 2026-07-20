import React from "react";
import "./SectionTitle.css";

function SectionTitle({ title }) {
  return (
    <div className="section-title-wrapper">
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default SectionTitle;