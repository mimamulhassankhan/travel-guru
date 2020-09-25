import { Checkbox, FormControlLabel, Input } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = (event) => {
        history.replace(from);
        event.preventDefault();
    }

    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #fff; }'}</style>
            </Helmet>
            <div className="border rounded w-25 p-3 mx-auto">
                <form onSubmit={handleSubmit}>
                    <h3 className="mb-3">Login</h3>
                    <Input fullWidth={true} required={true} placeholder="Username or email" />
                    <br/>
                    <br/>
                    <Input type="password" fullWidth={true} required={true} placeholder="Password" />
                    <br/>
                    <br/>
                    <div className="d-flex align-items-center justify-content-between">
                        <FormControlLabel control={ <Checkbox name="checkedI" /> } label="Remember me"/>
                        <label className="text-warning">Forget Password</label>
                    </div>
                    <br/>
                    <Link to={`/place/room`}>
                        <Form.Control className="bg-warning" type="submit" value="Login"/>
                    </Link>
                    <br/>
                    <label className="mx-auto">Don't have an account? <Link to={`/signup`}>Create Account</Link></label>
                </form>
            </div>
        </div>
    );
};

export default Login;