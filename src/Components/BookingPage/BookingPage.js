import React from 'react';
import { Helmet } from 'react-helmet';
import BookingForm from '../BookingForm/BookingForm';

const BookingPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-around">
            <Helmet>
                <style>{'body { background-image: url("/Images/Image/Rectangle 1.png"); }'}</style>
            </Helmet>
            <div className="w-25">
                <h1>Cox's Bazar</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eius ipsum nisi eligendi earum fugiat maiores, libero, ipsam perspiciatis esse amet temporibus corporis cupiditate saepe quaerat molestiae reiciendis tempore doloremque.</p>
            </div>
            <div>
                <BookingForm/>
            </div>
        </div>
    );
};

export default BookingPage;