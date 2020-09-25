import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SliderItem.css';

const SliderItem = ({data}) => {
    const {name, photo} = data;
    return (
        <div>
            <Card className="bg-dark m-3 text-white rounded-pill shadow">
                <Card.Img src={photo} alt="Card image" />
                <Card.ImgOverlay className="h-100 d-flex flex-column justify-content-end">
                    <Card.Title className="card-text">{name}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default SliderItem;