import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChoiceContainer = ({data}) => {
    const {name, description} = data;
    return (
        <div>
            <h1>{name}</h1>
            <p className="w-75">{description}</p>
            <Link to={`/booking`}>
                <Button className="align-items-center" variant="warning" type="submit">Booking <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
            </Link>
        </div>
    );
};

export default ChoiceContainer;