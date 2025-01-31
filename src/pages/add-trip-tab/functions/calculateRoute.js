



/* global google */

export const calculateRoute = async (origin, destination, setDirectionsResponse, setDistance, setDuration, dispatch, addTrip) => {
    // التحقق من أن الأماكن ليست فارغة
    if (origin === '' || destination === '') {
     
      // إذا كان أحد الأماكن فارغًا، يتم تحديد الحالة "فاشلة"
      const status = 'failed';
      dispatch(addTrip({ id: Date.now(), origin, destination, status }));
      return;
    }
  
  
    try {

  
      // إذا كانت المواقع صالحة، نتابع حساب المسار
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });
  
      // تعيين استجابة الاتجاهات
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
  
      // إضافة الرحلة باستخدام Redux مع حالة "ناجحة"
      const status = 'success';
      dispatch(addTrip({ id: Date.now(), origin, destination, status }));
  
    } catch (error) {
      console.error("Error calculating route:", error);
      // في حالة حدوث خطأ، نعتبر الرحلة فاشلة
      const status = 'failed';
      dispatch(addTrip({ id: Date.now(), origin, destination, status }));
    }
  };
  



  