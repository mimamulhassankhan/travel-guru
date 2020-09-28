import { Checkbox, FormControlLabel, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { addLoggedinUser } from '../../Redux/Actions/appActions';
import { defaulftLoggingFramework, signInWithEmailAndPassword } from './LoginManager';

const Login = ({user, addLoggedinUser}) => {
    
    //call login framework
    defaulftLoggingFramework();
    
    //local state
    const [localUser, setLocalUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        confirmPassword:''
    })

    const handleBlur = event => {
        let isFormValid = true;
        if(event.target.name === 'email'){
          isFormValid = /\S+\@\S+\.\S+/.test(event.target.value);
        }
        else if(event.target.name === 'password'){
          isFormValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(event.target.value)
        }
        if(isFormValid){
          const newUserInfo = {...localUser};
          newUserInfo[event.target.name] = event.target.value;
          setLocalUser(newUserInfo);
        }
        event.preventDefault(); 
    }

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = (event) => {
        if(localUser.email && localUser.password) {
            signInWithEmailAndPassword(localUser.email, localUser.password)
            .then(res => {
            setLocalUser(res);
            addLoggedinUser(res);
            history.replace(from);
            }).catch(err =>{
              console.log(err.message);  
            });
        }
        event.preventDefault();
    }

    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #fff; color: black; }'}</style>
            </Helmet>
            <div className="border rounded w-25 p-3 mx-auto">
                <form onSubmit={handleSubmit}>
                    <h3 className="mb-3">Login</h3>
                    <Input onBlur={handleBlur} name="email" fullWidth={true} required={true} placeholder="Username or email" />
                    <br/>
                    <br/>
                    <Input onBlur={handleBlur} name="password" type="password" fullWidth={true} required={true} placeholder="Password" />
                    <br/>
                    <br/>
                    <div className="d-flex align-items-center justify-content-between">
                        <FormControlLabel control={ <Checkbox name="checkedI" /> } label="Remember me"/>
                        <label className="text-warning">Forget Password</label>
                    </div>
                    <br/>
                    <Form.Control className="bg-warning" type="submit" value="Login"/>
                    <br/>
                    <label className="mx-auto">Don't have an account? <Link to={`/signup`}>Create Account</Link></label>
                </form>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);