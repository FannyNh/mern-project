import React, { useState } from 'react';
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const Log = (props) => {
    const [signInM, setSignInM] = useState(props.signInM);
    const [signUpM, setSignUpM] = useState(props.signUpM);
    const handleModals =(e)=>{
        if(e.target.id === "connect"){
            setSignInM( true);
            setSignUpM( false)
        }
        else if(e.target.id==="inscription"){
            setSignUpM( true);
            setSignInM( false);
        }
    }
    return (
        <div className="connection-form ">
            
            <div className="form-container">
                <ul>
                    <li className={signInM ? "active-btn" : ""} onClick={handleModals}  id="connect" >Sign In</li>
                    <li className={signUpM ? "active-btn" : ""} onClick={handleModals}  id="inscription"> Sign Up</li>
                </ul>
                {signInM && <SignInForm/> }
                {signUpM && <SignUpForm/> }

            </div>
        </div>
    );
};

export default Log;