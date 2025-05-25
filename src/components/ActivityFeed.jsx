import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const activityData = [
    { day: 'Mon', value: 30 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 20 },
    { day: 'Thu', value: 60 },
    { day: 'Fri', value: 35 },
    { day: 'Sat', value: 80 },
    { day: 'Sun', value: 25 }
  ];

  const maxValue = Math.max(...activityData.map(d => d.value));

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <p className="activity-subtitle">3 appointments on this week</p>
      </div>
      
      <div className="activity-chart">
        <div className="chart-bars">
          {activityData.map((data, index) => (
            <div key={data.day} className="chart-bar-container">
              <div 
                className="chart-bar"
                style={{ 
                  height: `${(data.value / maxValue) * 100}%`,
                  backgroundColor: index === 3 ? '#22d3ee' : index === 5 ? '#3b82f6' : '#e5e7eb'
                }}
              ></div>
              <span className="chart-label">{data.day}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="activity-details">
        <button className="details-btn">Details</button>
      </div>
    </div>
  );
};

export default ActivityFeed;