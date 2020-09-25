import { DatePicker } from '@fluentui/react';
import React from 'react';
import {Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookingForm = () => {
    return (
        <>
        <div className="bg-white rounded border">
           <Form className="p-3">
            <Form.Group >
                <Form.Label>Origin</Form.Label>
                <Form.Control size="md" type="email" placeholder="Where From" DefaultValue="Dhaka" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Destination</Form.Label>
                <Form.Control size="md" placeholder="Destination" />
            </Form.Group>
            <div className="d-flex">
                <div>
                    <Form.Group>
                        <Form.Label>From</Form.Label>
                        <DatePicker placeholder="Select a date..." />
                    </Form.Group>
                </div>
                <div>
                        <Form.Label>To</Form.Label>
                        <DatePicker style={{fontSize: '40px'}} placeholder="Select a date..." />
                </div>
            </div>
            <Link to={`/login`}>
                <Form.Control className="bg-warning" type="submit" value="Submit"/> 
            </Link>
            </Form>
        </div>     
        </>
    );
};

export default BookingForm;