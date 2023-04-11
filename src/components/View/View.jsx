import React,{useContext,useEffect,useState} from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import firebaseContext from '../../store/FirebaseContext';
import { doc, collection, query, where, onSnapshot,getFirestore } from "firebase/firestore";
function View() {
  const [userDetails,setUserDetails]=useState()
  const  {postDetails} =useContext(PostContext)
  const {firebase} = useContext (firebaseContext)
  
  useEffect(()=>{
    console.log(postDetails,"postDetails")

    const { id } = postDetails;
    console.log(id);
    
   
  
    const db = getFirestore();
    const usersCollection = collection(db, "users");
  
    
  
    const userQuery = query(usersCollection, where("id", "==", id));
  
  
    const unsubscribe = onSnapshot(userQuery, (querySnapshot) => {
      const userDetails = querySnapshot.docs.map((doc) => doc.data());
      setUserDetails(userDetails);
    });
  
  
  
    return () => unsubscribe();
  }, [postDetails, setUserDetails, firebase]);
  
     
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.imageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller name</p>
          <p>ARJUN V</p>
          <p>9745662340</p>
        </div>
      </div>
    </div>
  );
}
export default View;
