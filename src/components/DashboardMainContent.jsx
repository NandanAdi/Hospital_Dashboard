import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { healthStatusData, calendarData, appointmentCards, upcomingSchedule } from '../data/healthData';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        <div className="anatomy-section">
          <AnatomySection healthStatusData={healthStatusData} />
        </div>
        <div className="calendar-section">
          <CalendarView 
            calendarData={calendarData} 
            appointmentCards={appointmentCards} 
          />
        </div>
        <div className="schedule-section">
          <UpcomingSchedule upcomingSchedule={upcomingSchedule} />
        </div>
        <div className="activity-section">
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;