import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CalendarView.css';

const CalendarView = ({ calendarData, appointmentCards }) => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2 className="calendar-title">{calendarData.month}</h2>
        <div className="calendar-nav">
          <ChevronLeft className="nav-arrow" />
          <ChevronRight className="nav-arrow" />
        </div>
      </div>
      
      <div className="calendar-grid">
        {calendarData.days.map((day) => (
          <div key={day.date} className="calendar-day">
            <div className="day-header">
              <span className="day-name">{day.day}</span>
              <span className="day-number">{day.date}</span>
            </div>
            <div className="day-appointments">
              {day.appointments.map((time, index) => (
                <div key={index} className="appointment-time">
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="appointment-cards">
        {appointmentCards.map((card) => (
          <div key={card.id} className="appointment-card" style={{ borderLeftColor: card.color }}>
            <div className="appointment-info">
              <h3 className="appointment-title">{card.title}</h3>
              <p className="appointment-time-range">{card.time}</p>
              <p className="appointment-doctor">{card.doctor}</p>
            </div>
            <div className="appointment-icon" style={{ backgroundColor: card.color + '20' }}>
              {card.type === 'dentist' ? '🦷' : '🏃‍♂️'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;