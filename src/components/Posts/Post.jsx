import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import { Firebasecontext } from '../../store/FirebaseContext';
import './Post.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';



function Posts() {
  const navigate = useNavigate();

  const postContext = useContext(PostContext);
  const { setPostDetails } = postContext;
  const [products, setProducts] = useState([])

  useEffect(() => {

    const db = getFirestore();
    const fetchProducts = async () => {
      console.log("okkkkkkk")
      console.log(products, "productsssssssss")

      const productsSnapshot = await getDocs(collection(db, 'products'));

      const allProducts = productsSnapshot.docs.map((products) => {
        return {
          ...products.data(),
          id: products.id
        }


      })

      setProducts(allProducts)

    };

    fetchProducts();
  }, []);



  console.log(products)



  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {products.map((product) => {


            return (

              <div
                className="card"
                onClick={() => {
                  setPostDetails(product)
                  navigate('/View')

                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.imageUrl} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> </p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            )

          })

          }


        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
       
      </div>
    </div>
  );
}

export default Posts;