import { SearchBox } from '@fluentui/react';
import React from 'react';
import { Button, Col, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TitleBar = () => {
    return (
        <>
           <Navbar expand="lg" variant="light" bg="transparent">
                <Container className="d-flex justify-content-between">
                        <Col >
                            <Link to={`/`}>
                                <img width={120} src="/Images/Logo.png" alt="logo"/>
                            </Link>
                        </Col>
                        <Col md={10} className="text-white text-decoration-none font-weight-bold d-flex align-items-center justify-content-between">
                            <SearchBox className="bg-transparent" placeholder="Search" />
                            <Nav.Link disabled>News</Nav.Link>
                            <Nav.Link disabled>Destination</Nav.Link>
                            <Nav.Link disabled>Blog</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                            <Link to={`/login`}>
                                <Button className="text-dark font-weight-bold" variant="warning" type="submit">Login</Button>
                            </Link>
                        </Col>
                </Container>
            </Navbar>
        </>
    );
};

export default TitleBar;