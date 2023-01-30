import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Position, Coordinates } from './geolocation';
import { apiGetAndAuth } from '../../utils/api/axios';
import mapview from '../Ridermaps/Ridermap.module.css';
import { Link } from 'react-router-dom';


const containerStyle = {
  width: '100%',
  height: '100vh'
};

const options = {
  // enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 300000
};


const MapTracking: React.FC = () => {
  const [order, setOrder] = useState<any | null>({});
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY as string
  });
  
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [geocodingError, setGeocodingError] = useState(false);
  // const deliveryLocationRef = useRef<any | null>();
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(position.coords.latitude, position.coords.longitude);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // } else {
  //   console.error("Geolocation is not supported by this browser.");
  // }
  
  const restructure = order.dropOffLocation?.split(' ').join("+");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setCurrentPosition(position as Position);
        },
        (error) => {
          console.error(error);
        },
        options
      );
    }
  }, [currentPosition]);

  useEffect(() => {
    const geocodeAddress = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${restructure}&key=${import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY}`
      );
      const data = await response.json();

      if (data.status === "OK") {
        setCoordinates({
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng,
        });
        setGeocodingError(false);
      } else {
        setGeocodingError(true);
      }
    };
    if (restructure) {
      geocodeAddress();
    }
  }, [restructure]);

	// async function calculatorRoute() {
	// 	// event.preventDefault();
	// 	if (
	// 		pickupLocationRef.current.value === "" ||
	// 		deliveryLocationRef.current.value === ""
	// 	) {
	// 		return;
	// 	}

	// 	const directionsService = new google.maps.DirectionsService();
	// 	const result = await directionsService.route({
	// 		origin: pickupLocationRef.current.value,
	// 		destination: deliveryLocationRef.current.value,
	// 		travelMode: google.maps.TravelMode.DRIVING,
	// 	});

	// 	setDirectionResponse(result);
	// 	setDistance(result.routes[0].legs[0].distance?.text);
	// 	setDuration(result.routes[0].legs[0].duration?.text);

	// 	console.log("page loaded!!!")
	// 		setDisplayCard(!false);


	// 	// setTimeout(() => {
	// 	// 	navigate("/accept-request")
	// 	// }, 10000)
	// }

	// useEffect(() => {
	// 	calculatorRoute();
	// }, [order])

  useEffect(() => {
		const getOrder = async () => {
			try {
				const { data } = await apiGetAndAuth(`/riders/get-order-byId/${localStorage.getItem("orderID")}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("signature")}`,
					},
				})

				setOrder(data.myOrder)
			} catch (error) {
				console.log(error)
			}
		}
		getOrder();
  }, [])

  console.log(coordinates)
  // console.log(currentPosition?.coords.latitude)
  // console.log(currentPosition?.coords.longitude)

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <div className={mapview.mapContainer}>
      <div></div>
     {/* <div className={mapview.details}>
      <h3>Request details</h3>
      <form key="" action="" className={mapview.formCtn}>
        <div className={mapview.divInputCtn}>
          <label className={mapview.divInputCtnLbl}>Pickup Location</label>
          <input
            type="text"
            value={order.pickupLocation}
            placeholder="pickup location"
            ref={pickupLocationRef}
            disabled
          />
          
        </div>
        <div className={mapview.divInputCtn}>
          <label className={mapview.divInputCtnLbl}>
            Delivery Location
          </label>
          <input
            type="text"
            value={order.dropOffLocation}
            placeholder="pickup location"
            ref={deliveryLocationRef}
            disabled
          />
        </div>

        <div className={mapview.btnGroup}>
          <button onClick={handleClick} ref={buttonRef} className={mapview.aceptReq}>Accept Request</button>
          <Link to={"/rider-biddings"}><button className={mapview.declineReq}>Decline Request</button></Link>
        </div>
      </form>
    </div>  */}

    <div className={mapview.mapV}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={15}
          center={currentPosition ? { lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude } : undefined}
        >
          {currentPosition && coordinates && (
            <>
               <Marker position={{ 
                lat: currentPosition.coords.latitude, 
                lng: currentPosition.coords.longitude 
                }}
              /> 
              <Marker position={{ 
                lat: coordinates.lat, 
                lng: coordinates.lng 
                }} 
              />
              {/* <Marker position={coordinates}/> */}
            </>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapTracking;
