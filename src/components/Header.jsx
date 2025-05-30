// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>إدارة التدفق النقدي الشخصي</h1>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <span>Mohamed Taha</span>
          <div className="avatar">MA</div>
        </div>
      </div>
    </header>
  );
};

export default Header;