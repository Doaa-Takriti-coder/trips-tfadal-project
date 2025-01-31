// src/utils/clearRoute.js
export const clearRoute = (setDirectionsResponse, setDistance, setDuration, originRef, destinationRef) => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  };
  