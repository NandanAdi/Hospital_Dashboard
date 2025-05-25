import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">
          <span className="logo-health">Health</span>care.
        </h1>
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
      </div>
      <div className="header-right">
        <div className="notification-container">
          <Bell className="notification-icon" />
          <span className="notification-badge"></span>
          
        </div>
        <div className="user-section">
          <div className="user-avatar">
            <span>AD</span>
          </div>
          <div className="add-button">
            <Plus className="add-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;