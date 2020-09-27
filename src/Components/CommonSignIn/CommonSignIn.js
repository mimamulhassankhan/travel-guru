import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { addLoggedinUser } from '../../Redux/Actions/appActions';
import './CommonSignIn.css';
import { handleFbSignIn, handleGoogleSignIn } from './CommonSignInManager';

const CommonSignIn = ({user, addLoggedinUser}) => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const googleSignIn =() =>{
        handleGoogleSignIn()
        .then(res => {
            addLoggedinUser(res);
            history.replace(from);
        })
        .catch(err => console.log(err));
    }

    const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
            addLoggedinUser(res);
            history.replace(from);
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="w-25 mx-auto">
            <div className="group">
                <div className="item line"></div>
                <div className="item text">or</div>
                <div className="item line"></div>
            </div>
            <Button onClick={googleSignIn} className="mt-3 rounded-pill btn-block text-center d-flex align-items-center" variant="outline-secondary" type="button">
                <div className="d-flex align-items-center justify-content-between">
                    <img className="mr-5" width={20} src="/Images/Icon/google.png" alt="Google"/>
                </div>
                Sign In With Google
            </Button>
            <Button onClick={fbSignIn} className="rounded-pill btn-block text-center d-flex align-items-center" variant="outline-secondary" type="button">
                <div className="d-flex align-items-center justify-content-between">
                    <img className="mr-5" width={25} src="/Images/Icon/fb.png" alt="Facenook"/>
                </div>
                Sign In With Facebook
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}
const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonSignIn);