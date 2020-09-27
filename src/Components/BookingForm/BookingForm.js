import { DatePicker } from '@fluentui/react';
import React, { useState } from 'react';
import {Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookingForm = ({data}) => {
    const [formValid, setFormValid] = useState(false);

    const handleBlur = (e) => {
        let isFormValid = true;
        if(e.target.id === 'from-loc' || e.target.id === 'to-loc' || e.target.id === 'DatePicker3-label' || e.target.id === 'DatePicker13-label'){
            if(e.target.value){
                isFormValid = true;
            }
            else{
                isFormValid = false;
            }
        }
        if(isFormValid){
            setFormValid(true);
        }
        e.preventDefault();
    }
    return (
        <>
        <div className="bg-dark rounded border">
           <Form className="p-3">
            <Form.Group >
                <Form.Label>Origin</Form.Label>
                <Form.Control onBlur={handleBlur} id="from-loc" className="font-weight-bold" size="md" type="email" placeholder="Where From" value="Dhaka"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Destination</Form.Label>
                <Form.Control onBlur={handleBlur} id="to-loc" className="font-weight-bold" fomt size="md" placeholder="Destination" value={data.name}/>
            </Form.Group>
            <div className="d-flex">
                <div>
                    <Form.Group>
                        <Form.Label>From</Form.Label>
                        <DatePicker onBlur={handleBlur} placeholder="Select a date..." />
                    </Form.Group>
                </div>
                <div className="ml-1">
                        <Form.Label>To</Form.Label>
                        <DatePicker onBlur={handleBlur} style={{fontSize: '40px'}} placeholder="Select a date..." />
                </div>
            </div>
            {
                formValid ?
                <Link to={`/${data.name}/hotels`} className="text-decoration-none">
                    <Form.Control className="bg-warning text-white" type="submit" value="Submit"/> 
                </Link>:
                <Form.Control className="bg-warning text-white" type="submit" value="Submit" disabled/> 
            }
            </Form>
        </div>     
        </>
    );
};

export default BookingForm;