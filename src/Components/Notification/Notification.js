import React from 'react';
import { Toast } from 'react-bootstrap';

const Notification = ({showA, onClose}) => {
    return (
        <Toast style={{ position: 'absolute', top: 0, right: 0, }} show={showA} onClose={onClose}>
          <Toast.Header>
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
    );
};

export default Notification;