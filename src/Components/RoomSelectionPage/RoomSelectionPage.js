import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { hotelData } from '../../FakeData/HotelData';
import LocationMap from '../LocationMap/LocationMap';
import RoomDetails from '../RoomDetails/RoomDetails';

const GOOGLE_MAP_API_KEY = 'AIzaSyBZ4dKeU-d9vxIx4SyGf5VmbVf-ko7xiTs';

const loadGoogleMapScript = (callback) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      callback();
    } else {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener("load", callback);
    }
  }

const RoomSelectionPage = () => {
    const {placeName} = useParams();
    const [hotels, setHotels] = useState([]);
    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        loadGoogleMapScript(() => {
          setLoadMap(true)
        });
      }, []);

    useEffect(() => {
        const allHotelData = [...hotelData];
        const selectedHotels = allHotelData.filter(htls => htls.location === placeName);
        setHotels(selectedHotels);
    },[placeName])
    return (
        <Container>
            <Helmet>
                <style>{'body { background-color: #fff; }'}</style>
            </Helmet>
            <div className="d-flex align-items-center justify-content-around border-top">
                <div>
                    <p><small className="text-muted">252 stays April 13-17 3 guests</small></p>
                    <h3>Stay in {placeName}</h3>
                    {
                        hotels.map(htls => <RoomDetails data={htls} id={htls.id}></RoomDetails>)
                    }
                </div>
                <div>
                    {!loadMap ? <div>Loading...</div> : <LocationMap place={placeName}/>}
                </div>
            </div>
        </Container>
    );
};

export default RoomSelectionPage;