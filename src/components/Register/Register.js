import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Register Your Account</h2>
                <form action="">
                    <input type="email" name = 'email' id='name' placeholder='Enter your email' />
                    <br />
                    <input type="password" name='password' placeholder='Enter Your password' />
                    <br />
                    <input type="password" name="confirm-password" id="" placeholder='Confirm Password'/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already Have Account <Link to='/login'>Login</Link></p>
                <div>---------------or-----------</div>
                <button className='btn btn-regular'>Google Sign In</button>
            </div>
            
        </div>
    );
};

export default Register;