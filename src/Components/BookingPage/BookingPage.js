import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { placeData } from '../../FakeData/PlaceData';
import BookingForm from '../BookingForm/BookingForm';

const BookingPage = () => {
    const {placeId} = useParams();
    const [places, setPlaces] = useState({});
    useEffect(() => {
        const allPlaces = [...placeData];
        const [selectedPlace] = allPlaces.filter(plc => plc.id === placeId);
        setPlaces(selectedPlace);
    },[placeId]);
    return (
        <Container>
            <div className="d-flex mt-5 align-items-center justify-content-around">
                <Helmet>
                    <style>{'body { background-image: url("/Images/Image/Rectangle 1.png"); color: white; background-size : cover; background-position : center; }'}</style>
                </Helmet>
                <div className="w-50">
                    <h1>{places.name}</h1>
                    <p>{places.description}</p>
                </div>
                <div>
                    <BookingForm data={places} />
                </div>
            </div>
        </Container>
    );
};

export default BookingPage;