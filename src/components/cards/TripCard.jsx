import React from 'react';

// مكون TripCard يمكن استخدامه في أي مكان
const TripCard = ({ origin, destination, status }) => {
  return (
    <div className={`trip-card ${status}`}>
      <h4>Origin: {origin}</h4>
      <h4>Destination: {destination}</h4>
    </div>
  );
};

export default TripCard;
