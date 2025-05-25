import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = ({ upcomingSchedule }) => {
  return (
    <div className="upcoming-schedule-container">
      <h2 className="schedule-title">The Upcoming Schedule</h2>
      
      <div className="schedule-content">
        {upcomingSchedule.map((daySchedule, index) => (
          <div key={index} className="day-schedule">
            <h3 className="day-title">{daySchedule.day}</h3>
            <div className="day-appointments">
              {daySchedule.appointments.map((appointment) => (
                <SimpleAppointmentCard 
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;