import { Input } from '@material-ui/core';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { addLoggedinUser } from '../../Redux/Actions/appActions';
import { defaulftLoggingFramework } from '../Login/LoginManager';
import { createUserWithEmailAndPassword } from './SignUpManager';

const SignUp = ({user, addLoggedinUser}) => {
    //call login framework
    defaulftLoggingFramework();

    //local state
    const [localUser, setLocalUser] = useState({
        name: '',
        firstName:'',
        lastName: '',
        email:'',
        password:'',
        confirmPassword:''
    })

    //localze
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (e) => {
        let isFormValid = true;
        if(e.target.name === 'email'){
          isFormValid = /\S+\@\S+\.\S+/.test(e.target.value);
        }
        else if(e.target.name === 'password'){
          isFormValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(e.target.value)
        }
        else if(e.target.name === 'confirmPassword'){
            isFormValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(e.target.value)
        }

        if(isFormValid){
          const newUserInfo = {...localUser};
          newUserInfo[e.target.name] = e.target.value;
          setLocalUser(newUserInfo);
        }
        e.preventDefault(); 
      }

    const handleSubmit = e => {
        e.preventDefault();
        if(localUser.email && (localUser.password === localUser.confirmPassword)){
            const localName = localUser.firstName + ' ' + localUser.lastName;
            console.log(localName);
            createUserWithEmailAndPassword( localName, localUser.email, localUser.password)
            .then(res => {
                setLocalUser(res);
                addLoggedinUser(res);
                history.replace(from);
            }).catch(res => console.log(res));
          }
    }
    
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #fff; }'}</style>
            </Helmet>
            <div className="border rounded w-25 p-3 mx-auto">
                <form onSubmit={handleSubmit}>
                    <h3 className="mb-3">Create an account</h3>
                    <Input onBlur={handleBlur} name="firstName" fullWidth={true} required={true} placeholder="First name" />
                    <br/>
                    <br/>
                    <Input onBlur={handleBlur} name="lastName" fullWidth={true} required={true} placeholder="Last Name" />
                    <br/>
                    <br/>
                    <Input onBlur={handleBlur} name="email" fullWidth={true} required={true} placeholder="Username or email" />
                    <br/>
                    <br/>
                    <Input onBlur={handleBlur} name="password" type="password" fullWidth={true} required={true} placeholder="Password" />
                    <br/>
                    <br/>
                    <Input onBlur={handleBlur} name="confirmPassword" type="password" fullWidth={true} required={true} placeholder="Confirm Password" />
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

const mapStateToProps = (state) =>{
    return {
        user : state.user
    }
}
const mapDispatchToProps = {
    addLoggedinUser : addLoggedinUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);