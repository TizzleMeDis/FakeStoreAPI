import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductListPage, ProductDetailsPage, NavigationBar } from './components/index';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([])
  const [womensProducts, setWomensProducts] = useState([])
  const [jeweleryProducts, setJeweleryProducts] = useState([])
  const [electronicProducts, setElectronicProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productCategories = {
    products,
    mensProducts,
    womensProducts,
    jeweleryProducts,
    electronicProducts
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data)
        setProducts(response.data)
        setLoading(false);
      })
      .catch((error) => {
        setError(error)
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (products.length === 0) return;

    const mens = [];
    const womens = [];
    const electronics = [];
    const jewelery = [];

    products.forEach((item) => {
      switch (item.category.toLowerCase()) {
        case "men's clothing":
          mens.push(item);
          break;
        case "women's clothing":
          womens.push(item);
          break;
        case "jewelery":
          jewelery.push(item);
          break;
        case "electronics":
          electronics.push(item);
          break;
        default:
          console.log(`Uncategorized item: ${item.title} - ${item.category}`);
      }
    });

    setMensProducts(mens);
    setWomensProducts(womens);
    setJeweleryProducts(jewelery);
    setElectronicProducts(electronics);

    console.log("Mens products:", mens);
    console.log("Womens products:", womens);
    console.log("Jewelery products:", jewelery);
    console.log("Electronics:", electronics);
  }, [products]);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h1>Loading products...</h1>
    </div>    
  )

  if (error) return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h1>{error}</h1>
    </div>
  )

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage {...productCategories} />} />
        <Route path='/product-list' element={<ProductListPage {...productCategories} />} />
        <Route path='/product-details/:productId' element={<ProductDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
