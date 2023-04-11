import React, { useState, useContext } from 'react';


import Logo from '../../olx-logo.png';
import './Signup.css';
import firebaseContext from '../../store/FirebaseContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom'


export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { firebase } = useContext(firebaseContext)
    const navigate=useNavigate();

    const handlesubmit =async (e) => {
        e.preventDefault()

    
        const auth = getAuth();
        const userCredential=await createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const usersCollection =  collection(firebase, 'users');
                const newUser = {
                  uid: user.uid,
                  username,
                  email,
                  phone
                };
                const Ref= await addDoc(usersCollection, newUser);
          
                // Clear input fields
                setUsername('');
                setEmail('');
                setPhone('');
                setPassword('');

                
               
            }).then(()=>{
                navigate(`/login`)
            })
            .catch((error) => {
                console.error(error);
               
            });

    }
    return (
        <div>
            <div className="signupParentDiv">
                <img width="200px" height="200px" src={Logo} alt=''></img>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                        id="fname"
                        name="name"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="mail"
                        name="email"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="lname">Phone</label>
                    <br />
                    <input
                        className="input"
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="phone"
                        name="phone"
                        defaultValue="Doe"
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
                    <button>Signup</button>
                </form>
                <a >Login</a>
            </div>
        </div>
    );
}
