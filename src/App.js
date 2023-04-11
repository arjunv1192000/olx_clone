import React, { useEffect, useContext } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import firebaseContext, { AuthContext } from './store/FirebaseContext';
import { getAuth } from 'firebase/auth';
import Post from './store/PostContext';


function App() {
  const { setuser } = useContext(AuthContext);
  const {firebase} =useContext(firebaseContext)
 

  useEffect(() => {
    const auth=getAuth()
    auth.onAuthStateChanged((user)=>{
      setuser(user)
    })
  }, [setuser]);

  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/view' element={<ViewPost/>} />
        </Routes>
      </Router>
        
      </Post>
      
    </div>
  );
}

export default App;
