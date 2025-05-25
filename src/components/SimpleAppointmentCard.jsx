import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
  const getCardColor = (title) => {
    if (title.includes('Health checkup')) return '#22c55e';
    if (title.includes('Ophthalmologist')) return '#8b5cf6';
    if (title.includes('Cardiologist')) return '#ef4444';
    if (title.includes('Neurologist')) return '#3b82f6';
    return '#6b7280';
  };

  const cardColor = getCardColor(appointment.title);

  return (
    <div className="simple-appointment-card">
      <div className="appointment-card-content">
        <div className="appointment-icon-container" style={{ backgroundColor: cardColor + '20' }}>
          <span className="appointment-emoji">{appointment.icon}</span>
        </div>
        <div className="appointment-details">
          <h4 className="appointment-card-title">{appointment.title}</h4>
          <p className="appointment-card-time">{appointment.time}</p>
        </div>
      </div>
      <div className="appointment-status-dot" style={{ backgroundColor: cardColor }}></div>
    </div>
  );
};

export default SimpleAppointmentCard;