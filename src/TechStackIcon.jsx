import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="techstack-group">
      <div className="techstack-icon-bg" />
      <img
        src={TechStackIcon}
        alt={`${Language} icon`}
        className="techstack-img"
      />
      <span className="techstack-label">{Language}</span>
    </div>
  );
};

export default TechStackIcon;
