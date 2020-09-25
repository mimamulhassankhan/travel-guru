import React from 'react';
import { Button } from 'react-bootstrap';
import './CommonSignIn.css';

const CommonSignIn = () => {
    return (
        <div className="w-25 mx-auto">
            <div class="group">
                <div class="item line"></div>
                <div class="item text">or</div>
                <div class="item line"></div>
            </div>
            <Button className="mt-3 rounded-pill btn-block text-center d-flex align-items-center" variant="outline-secondary" type="button">
                <div className="d-flex align-items-center justify-content-between">
                    <img className="mr-5" width={20} src="/Images/Icon/google.png" alt="Google"/>
                </div>
                Sign In With Google
            </Button>
            <Button className="rounded-pill btn-block text-center d-flex align-items-center" variant="outline-secondary" type="button">
                <div className="d-flex align-items-center justify-content-between">
                    <img className="mr-5" width={25} src="/Images/Icon/fb.png" alt="Facenook"/>
                </div>
                Sign In With Facebook
            </Button>
        </div>
    );
};

export default CommonSignIn;