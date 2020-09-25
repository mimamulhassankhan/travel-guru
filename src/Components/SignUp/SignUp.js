import { Input } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #fff; }'}</style>
            </Helmet>
            <div className="border rounded w-25 p-3 mx-auto">
                <form>
                    <h3 className="mb-3">Create an account</h3>
                    <Input fullWidth={true} required={true} placeholder="First name" />
                    <br/>
                    <br/>
                    <Input fullWidth={true} required={true} placeholder="Last Name" />
                    <br/>
                    <br/>
                    <Input fullWidth={true} required={true} placeholder="Username or email" />
                    <br/>
                    <br/>
                    <Input type="password" fullWidth={true} required={true} placeholder="Password" />
                    <br/>
                    <br/>
                    <Input type="password" fullWidth={true} required={true} placeholder="Confirm Password" />
                    <br/>
                    <br/>
                    <Form.Control className="bg-warning" type="submit" value="Create an account"/>
                    <br/>
                    <label>Don't have an account? <Link to={`/signup`}>Create Account</Link></label>
                </form>
            </div>
        </div>
    );
};

export default SignUp;