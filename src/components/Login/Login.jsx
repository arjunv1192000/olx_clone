import React, { useState,useContext   } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import firebaseContext from '../../store/FirebaseContext';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { firebase } = useContext(firebaseContext)
    const navigate=useNavigate();
  

    const handlesubmit = (e) => {
        e.preventDefault() 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate(`/`)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }


    return (
        <div>
            <div className="loginParentDiv">
                <img width="200px" height="200px" src={Logo}></img>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="fname"
                        name="email"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="lname"
                        name="password"
                        defaultValue="Doe"
                    />
                    <br />
                    <br />
                    <button>Login</button>
                </form>
                <a>Signup</a>
            </div>
        </div>
    );
}

export default Login;
