import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import { navigationLinks } from './data/navigationData';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar navigationLinks={navigationLinks} />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App