import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

export default function ProductDetailsPage() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        setError("Products failed to load :(");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1>Loading products...</h1>
      </div>
    );

  if (error)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1>{error}</h1>
      </div>
    );

  return (
    <div className="d-flex h-75">
      <div className="w-50">
        <img 
          src={`${product.image}`} 
          className="p-5"
          style={{objectFit: 'contain', width: '50vw'}}/>
      </div>
      <div className="d-flex flex-column p-4 align-items-left justify-content-center">
        <h2>{product.title}</h2>
        <h6>{product.description}</h6>
        <h5>${product.price.toFixed(2)}</h5>
        <div className="ms-5">
        <Button className="px-3 m-3 border border-secondary text-secondary bg-transparent">
  Add to cart
</Button>
          <Button className="px-3 m-3 border border-black text-white bg-black">Buy Now</Button>
        </div>
      </div>
    </div>
  );
}
