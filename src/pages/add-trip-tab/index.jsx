import React, { useState, useRef, useEffect } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { addTrip } from '../../redux/tripSlice';
import GoogleMapComponent from '../../components/Map/GoogleMapComponent';
import InputAutocomplete from '../../components/inputs/InputAutocomplete';
import CustomButton from '../../components/buttons/CustomButton';
import TripDetails from './components/TripDetails';
import { calculateRoute } from './functions/calculateRoute';
import { clearRoute } from './functions/clearRoute';
import CustomLoading from '../../components/loading/CustomLoading';

const center = { lat: 48.8584, lng: 2.2945 };
const libraries = ['places'];

function AddTripTab() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const dispatch = useDispatch();
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [isLoading, setIsLoading] = useState(false); // حالة اللودينغ
  const originRef = useRef();
  const destinationRef = useRef();
  useEffect(() =>{

  },[isLoading])

  if (!isLoaded) {
    return <CustomLoading/>
  }

 // استخدام الفانكشنات المحفوظة
  const handleCalculateRoute = async () => {
    setIsLoading(true);  // تفعيل اللودينغ عند بدء الحساب
    try {
      await calculateRoute(
        originRef.current.value,
        destinationRef.current.value,
        setDirectionsResponse,
        setDistance,
        setDuration,
        dispatch,
        addTrip,
      );
    } catch (error) {
      console.error("Error calculating route:", error);
    } finally {
      // يتم إيقاف اللودينغ هنا بعد الانتهاء من العملية
      setIsLoading(false);
    }
  };


  const handleClearRoute = () => {
    clearRoute(setDirectionsResponse, setDistance, setDuration, originRef, destinationRef);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: "100%" }}>
      <div style={{ position: 'absolute', left: 0, top: "150px", height: '100%', width: '100%' }}>
        <GoogleMapComponent center={center} directionsResponse={directionsResponse} />
      </div>
      <div style={{ position: 'absolute', top: '0px', left: '50%', transform: 'translateX(-50%)', padding: '16px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', width: 'calc(100% - 32px)', maxWidth: '600px', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{width:"48%" }}>  <InputAutocomplete placeholder="Origin" ref={originRef} /> </div>
         
        <div style={{width:"48%" }}>  <InputAutocomplete placeholder="Destination" ref={destinationRef} /></div>  
        
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomButton 
            text={isLoading ? "Calculating..." : "Calculate Route"} 
            onClick={handleCalculateRoute} 
            style={{ backgroundColor: '#ff4081', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: isLoading ? 'not-allowed' : 'pointer' }} 
            disabled={isLoading} // تعطيل الزر أثناء تحميل الحساب
          />
          <CustomButton text="Clear" onClick={handleClearRoute} style={{ backgroundColor: '#ccc', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }} />
        </div>
        {directionsResponse && <TripDetails distance={distance} duration={duration} />}
      </div>
    </div>
  );
}

export default AddTripTab;
