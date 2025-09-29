import React, { useEffect, useState } from 'react'

const Products = () => {
    const [product,setProduct] = useState([]);
    const [error,setError] = useState(null);

    useEffect(()=>{
        async function getProduct() {
    try{
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setProduct(data)   ;
        
    }
    catch(error){
           
    } 
   }
   getProduct();
    },[]);

      
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {product.map((ele) => (
        <div
          key={ele.id}
          className="border rounded-xl shadow-md p-4 hover:scale-105 transition duration-300"
        >
          <img
            src={ele.image}
            // alt={ele.title}
            className="h-48 mx-auto object-contain"
          />
          <h2 className="text-lg font-semibold mt-4">{ele.title}</h2>
          <p className="text-gray-700 text-sm mt-2">{ele.description.slice(0, 100)}...</p>
          <p className="mt-2 font-bold text-green-600">₹{ele.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Products
