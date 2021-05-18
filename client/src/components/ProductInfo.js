import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default props => {
  const [product, setProduct] = useState({})


  useEffect( () => {
    axios.get("http://localhost:8000/api/product/" + props._id)
      .then(response => {
        setProduct(response.data)
        console.log(response)
      })
      .catch(err => console.log("Error: ", err))
  }, [props._id])


  return (
    <div className="container">
      <h3>Title: { product.title }</h3>
      <h3>Price: ${ product.price }</h3>
      <h3>Description: { product.description }</h3>
    </div>
  )
}