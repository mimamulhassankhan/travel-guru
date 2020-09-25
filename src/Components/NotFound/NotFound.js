import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className="m-auto pt-5">
            <h1 className="text-danger">This page is not found.</h1>
        </Container>
    );
};

export default NotFound;