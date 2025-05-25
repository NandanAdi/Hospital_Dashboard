import React from 'react';
import './HealthStatusCards.css';

const HealthStatusCards = ({ healthStatusData }) => {
  return (
    <div className="health-status-cards">
      {healthStatusData.map((item) => (
        <div key={item.id} className="health-card">
          <div className="health-card-header">
            <div className="health-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <h3 className="health-name">{item.name}</h3>
          </div>
          <p className="health-date">{item.date}</p>
          <div className="health-progress">
            <div 
              className="health-progress-bar"
              style={{ 
                backgroundColor: item.color,
                width: item.status === 'good' ? '85%' : '45%'
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;