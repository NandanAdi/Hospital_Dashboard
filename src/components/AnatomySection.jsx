import React from 'react';
import HealthStatusCards from './HealthStatusCards';
import { Heart } from 'lucide-react';
import AnatomyImage from '/public/Anatomy-removebg-preview.png';
import './AnatomySection.css';

const HumanBodySVG = () => (
<div className="human-body-image">
  <img 
    src={AnatomyImage}
    alt="Human body anatomy" 
    className="anatomy-image"
  />
</div>
);

const AnatomySection = ({ healthStatusData }) => {
  return (
    <div className="anatomy-container">
      <div className="anatomy-header">
        <h2 className="anatomy-title">Dashboard</h2>
        <span className="anatomy-subtitle">This Week</span>
      </div>
      
      <div className="anatomy-content">
        <div className="human-body-container">
          

          {/* HumanBody */}
          <div className="human-body">
            <HumanBodySVG />
            
            {/* Healthy Heart indicator */}
            <div className="heart-indicator">
              <div className="heart-badge">
                <Heart className="heart-icon" />
                <span>Healthy Heart</span>
              </div>
            </div>
          </div>
          
          {/* Healthy Log button */}
          <div className="healthy-log-btn">
            <span>Healthy Log</span>
          </div>
        </div>
        
        {/* Health Status Cards */}
        <div className="health-status-container">
          <HealthStatusCards healthStatusData={healthStatusData} />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;