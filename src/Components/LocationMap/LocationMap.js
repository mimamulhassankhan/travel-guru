import React, { useEffect, useRef, useState } from 'react';
import { placeData } from '../../FakeData/PlaceData';

const LocationMap = ({place}) => {
    const googleMapRef = useRef(null);
    let googleMap = null;
    const [lat, setLat] = useState(0.00);
    const [lng, setLng] = useState(0.00);

    useEffect(() =>{
        const allPlaces = [...placeData];
        const [selectedPlace] = allPlaces.filter(plc => plc.name === place);
        const lat = selectedPlace.location.lat;
        const lng = selectedPlace.location.lng;
        setLat(lat);
        setLng(lng);
    },[place])

    useEffect(() => {
        googleMap = initGoogleMap();
        createMarker();
      }, [lat, lng]);

    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
          center: { lat: +lat, lng: +lng },
          zoom: 8
        });
      }

    const createMarker = () => new window.google.maps.Marker({
        position: { lat: +lat, lng: +lng },
        map: googleMap
      }); 
      
    console.log(lat, lng);

    return (
        <div
                className="mt-5"
                ref={googleMapRef}
                style={{ width: 400, height: 600, borderRadius: 20 }}
            /> 
    );
};

export default LocationMap;