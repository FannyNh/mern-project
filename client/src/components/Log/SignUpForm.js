import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    const [pseudo, setPseudo] = useState("pseudo");
    const [email, setEmail] = useState("pseudo@gmail.com")
    const [password, setPassword] = useState("dkdkkddkkd")
    const handleSub = (e) => {
        const errEmail = document.querySelector(".email.error");
        const errPseudo = document.querySelector(".pseudo.error");
        const errPassword = document.querySelector(".password.error");
        e.preventDefault();
        axios({
            method:"POST",
            url: `${process.env.REACT_APP_API_URL}api/user/register`,
            withCredentials: true,
            data : {
                pseudo,
                email, 
                password 
            }
        })
        .then((res) => {
            if (res.data.errors) {
                console.log(res);
                errEmail.innerHTML = res.data.errors.email;
                errPassword.innerHTML = res.data.errors.password;
                errPseudo.innerHTML = res.data.errors.pseudo;
            } else {
                window.location = '/';
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <form id="sign-up-form" onSubmit={handleSub}>
            <label htmlFor="pseudo" > enter your pseudo :</label>
            <input type="text" id="pseudo" value={pseudo} onChange={(e)=>{setPseudo(e.target.value)}}></input>
            <div className="pseudo error"></div>
            <br/><br/>
            <label htmlFor="email" > enter your email :</label>
            <input type="text" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <div className="email error"></div>
            <br/><br/>
            <label htmlFor="password" > enter your password :</label>
            <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <div className="password error"></div>
            <br/><br/>
            <input type="submit" value="s'inscrire"></input>
        </form>
    );
};

export default SignUpForm;