import React, { useState } from 'react';
import axios from 'axios'

const SignInForm = () => {
    const [email, setEmail] = useState("john@smith.com");
    const [password, setPassword] = useState("your password")
    const handleLog = (e) => {
        e.preventDefault();
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        axios(
            {
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/user/login`,
                withCredentials: true,
                data: { email, password, }
            }
        )
        .then((res) => {
            if (res.data.errors) {
                emailError.innerHTML = res.data.errors.email;
                passwordError.innerHTML = res.data.errors.password;
                
            } else {
                window.location = '/';
            }
        })
        .catch((err) => {
                console.log(err)
        });

    };
    return (
        <form action="" id="sign-up-form" onSubmit={handleLog}>
            <label htmlFor="emailText">E-mail</label>
            <br />
            <input id="emailText" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="email error">rrrrr</div>
            <br />
            <br />
            <label htmlFor="password">mot de passe</label>
            <br />
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div  className="password error"></div>
            <br />
            <br />
            <input id="submit" type="submit" value="se connecter" />
        </form>
    );
};

export default SignInForm;