import React from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductInfo from '../components/ProductInfo';
import { Router, Link } from '@reach/router';


export default () => {
  return (
    <>
      <div className="container">
        <Link to="/">Home</Link> | 
        <Link to="/new"> Add your product</Link>
      </div>


      <Router>
        <ProductForm path="/new" />
        <ProductList path="/" />
        <ProductInfo path="/product/:_id" />
      </Router>
    </>
  )
}