import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react';

const LocationMap = () => {
    return (
        <div>
            {/* <Map
                zoom={14}
                initialCenter={{
                    lat: 23.383011,
                    lng: 92.293782
                }}
                >
                <Marker
                name="Sajek"
                />
                </Map> */}
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'API_KEY'
  })(LocationMap);