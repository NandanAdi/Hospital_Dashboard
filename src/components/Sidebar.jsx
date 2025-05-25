import React from 'react';
import './Sidebar.css';

const Sidebar = ({ navigationLinks }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h2 className="sidebar-title">General</h2>
        <nav className="sidebar-nav">
          {navigationLinks.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.id}
                className={`nav-item ${link.active ? 'nav-item-active' : ''}`}
              >
                <Icon className="nav-icon" />
                <span className="nav-text">{link.name}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;