import React from 'react';

const TripDetails = ({ distance, duration }) => {
  return (
    <div style={{ marginTop: '16px' }}>
      <p><strong>Distance:</strong> {distance}</p>
      <p><strong>Duration:</strong> {duration}</p>
    </div>
  );
};

export default TripDetails;
