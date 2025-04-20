import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import { LandingPage, ProductSection } from '../components/products'
import LandingPicture from '../assets/ElectronicsLandingPagePicture.jpg'

export default function ElectronicsPage() {
  const [products, setProducts] = useState([]);
  const [electronicProducts, setElectronicProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function categorizesItems() {
    if (products.length === 0) return;

    const electronics = [];

    products.forEach((item) => {
      item.category.toLowerCase() == "electronics" ? electronics.push(item) : null
    });
    setElectronicProducts(electronics);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        setError("Products failed to load :(");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      categorizesItems();
    }
  }, [products]);
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
    <>
        <LandingPage image={LandingPicture} />
        <ProductSection products={electronicProducts} />
    </>
  )
}
