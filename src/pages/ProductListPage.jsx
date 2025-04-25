import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { ProductSection, LandingPage } from "../components/products";
import LandingPicture from "../assets/ProductLandingPagePicture.jpg";
export default function ProductListPage() {

  const [products, setProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([])
  const [womensProducts, setWomensProducts] = useState([])
  const [jeweleryProducts, setJeweleryProducts] = useState([])
  const [electronicProducts, setElectronicProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data)
        setProducts(response.data)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Uh oh! Something went wrong...");
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
      console.log(`item classification: \n${item.category} | ${item.category.toLowerCase().includes("women")}`)
      if (item.category.toLowerCase().includes("men") && !item.category.toLowerCase().includes("women")) {
        mens.push(item);
      } else if (item.category.toLowerCase().includes("women")) {
        womens.push(item);
      } else if (item.category.toLowerCase().includes("jewelery")) {
        jewelery.push(item)
      } else if (item.category.toLowerCase().includes("electronics")) {
        electronics.push(item)
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

  return (
    <>
      <LandingPage image={LandingPicture} caption={"Browse Our Collection"} />
      <ProductSection products={products} />
    </>
  );
}
