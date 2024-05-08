import React, { useEffect, useState } from 'react'
import Header from '../Header'
function Products() {
  const [ products , setProducts] = useState([]);
  

useEffect(()=>{
  const fetchProduts = async ()=>{
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json();
      console.log(data);
      setProducts(data);
  };
  fetchProduts();

}, [])


  return (
    <div> 
      <Header></Header>
      <h2 className='h2'>PRODUCTS</h2> 
      <div
      
      className='productsWrapper'>
        {

          products.map(products =>(
            <div className='pro' key={products.id}>
              
              <img src={products.image} alt="" />
              <h4>{products.title}</h4>
              <h5>{products.price}</h5>
              <button className='btn'>Add to cart</button>

            </div>
          ))
        }


      </div>
    </div>
  )
}

export default Products
