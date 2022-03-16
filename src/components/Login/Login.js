import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const  {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/shop';
    const navigate = useNavigate();

    const handleSignInGoogle = ()=>{
        signInUsingGoogle()
        .then(result=>{
            navigate(redirect_uri)
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name='email' placeholder='Please enter Your eail' />
                    <br />
                    <input type="password" name='password' placeholder='Pawwsord' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New Account <Link to='/register'>Register</Link></p>
                <div>---------------or------------------</div>
                <button className='btn btn-regular'
                onClick={handleSignInGoogle}
                >Goole Sign In</button>
            </div>
        </div>
    );
};

export default Login;