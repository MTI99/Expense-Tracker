// src/components/StatsCard.jsx
import React from 'react';

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className="stats-card">
      <div className="stats-info">
        <h3>{title}</h3>
        <h2>{value}</h2>
      </div>
      <div className="stats-icon" style={{ backgroundColor: `${color}20` }}>
        <span style={{ color }}>{icon}</span>
      </div>
    </div>
  );
};

export default StatsCard;