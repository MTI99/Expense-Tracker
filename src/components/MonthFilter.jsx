// src/components/MonthFilter.jsx
import React from 'react';

const MonthFilter = ({ months, currentMonth, onMonthChange }) => {
  return (
    <div className="month-filter">
      <select 
        value={currentMonth} 
        onChange={(e) => onMonthChange(e.target.value)}
        className="month-select"
      >
        {months.map(month => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthFilter;