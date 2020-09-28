import { SearchBox } from '@fluentui/react';
import React from 'react';
import { Button, Col, Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLoggedinUser } from '../../Redux/Actions/appActions';
import { handleSignOut } from './signoutManager';

const TitleBar = ({user, addLoggedinUser}) => {
    const {name, email} = user;


    const signOut = () => {
        handleSignOut()
        .then(res => {
          addLoggedinUser(res);
        })
      }

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
                            <Nav.Link>News</Nav.Link>
                            <Nav.Link>Destination</Nav.Link>
                            <Nav.Link>Blog</Nav.Link>
                            
                            {
                                email ?
                                <>
                                    {
                                        name ? <Nav.Link>{name}</Nav.Link> : <Nav.Link>{email}</Nav.Link>
                                    }
                                    <Button onClick={signOut} className="text-dark font-weight-bold" variant="warning" type="button">Sign Out</Button>
                                </> :
                                <>
                                    <Nav.Link>About Us</Nav.Link>
                                    <Link to={`/login`}>
                                        <Button className="text-dark font-weight-bold" variant="warning" type="button">Login</Button>
                                    </Link>
                                </>
                                
                            }
                        </Col>
                </Container>
            </Navbar>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);