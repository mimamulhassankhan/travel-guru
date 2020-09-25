import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import LocationMap from '../LocationMap/LocationMap';
import RoomDetails from '../RoomDetails/RoomDetails';

const RoomSelectionPage = () => {
    return (
        <Container>
            <Helmet>
                <style>{'body { background-color: #fff; }'}</style>
            </Helmet>
            <div className="border-top">
                <div>
                    <p><small className="text-muted">252 stays April 13-17 3 guests</small></p>
                    <h3>Stay in Cox's Bazar</h3>
                    <RoomDetails/>
                </div>
                <div>
                    <LocationMap />
                </div>
            </div>
        </Container>
    );
};

export default RoomSelectionPage;