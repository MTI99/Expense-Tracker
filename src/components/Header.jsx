// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>Personal Expense Tracker</h1>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <span>Mohamed Taha</span>
          <div className="avatar">MO</div>
        </div>
      </div>
    </header>
  );
};

export default Header;