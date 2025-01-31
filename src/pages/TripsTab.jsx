import React from 'react';
import { useSelector } from 'react-redux';
import TripCard from '../components/cards/TripCard'; // استيراد المكون الجديد

const TripsTab = () => {
  const trips = useSelector(state => state.trips.trips);

  return (
    <div className="trips-tab">
      <h1 style={{ textAlign: "center" }}>Trips</h1>
      
      <div className="trip-category">
        <h3>Success</h3>
        <div className="cards-container">
          {trips.filter(trip => trip.status === 'success').map(trip => (
            <TripCard 
              key={trip.id} 
              origin={trip.origin} 
              destination={trip.destination} 
              status="success" 
            />
          ))}
        </div>
      </div>

      <div className="trip-category">
        <h3>Failed</h3>
        <div className="cards-container">
          {trips.filter(trip => trip.status === 'failed').map(trip => (
            <TripCard 
              key={trip.id} 
              origin={trip.origin} 
              destination={trip.destination} 
              status="failed" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripsTab;

