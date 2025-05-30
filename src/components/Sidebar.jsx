// src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaChartLine, FaWallet, FaChartPie, FaCog } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">إدارة التدفق النقدي</div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="#" className="active">
              <span className="icon"><FaHome /></span>
              <span className="name">الرئيسية</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><FaChartLine /></span>
              <span className="name">الإيرادات</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><FaWallet /></span>
              <span className="name">المصروفات</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><FaChartPie /></span>
              <span className="name">التقارير</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon"><FaCog /></span>
              <span className="name">الإعدادات</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn">تسجيل الخروج</button>
      </div>
    </aside>
  );
};

export default Sidebar;