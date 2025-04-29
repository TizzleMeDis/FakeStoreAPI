import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import LandingPicture1 from "../assets/LandingPictureGirl.jpg";
import LandingPicture2 from "../assets/LandingPictureGuy.jpg";
import AccessoriesImage from "../assets/Accessories.jpg";
import Card1Pic from "../assets/MensClothingCard.jpg";
import Card2Pic from "../assets/WomensClothingCard.jpg";
import Card3Pic from "../assets/JewelryCard.jpg";
import Card4Pic from "../assets/ElectronicsCard.jpg";

import { SelectionListing } from "../components/products";
import LandingPageStyles from "../styles/LandingPage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);
  const [jeweleryProducts, setJeweleryProducts] = useState([]);
  const [electronicProducts, setElectronicProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const items = [
    { id: 1, title: "Men's Clothing", text: "Bold. Refined. Tailored looks that turn heads." },
    { id: 2, title: "Women's Clothing", text: "Luxe fashion for modern icons. Unapologetically chic." },
    { id: 3, title: "Jewelery", text: "Timeless sparkle. Statement pieces crafted to impress." },
    { id: 4, title: "Electronics", text: "Sleek tech meets cutting-edge style. Elevate your everyday." },
  ];
  const chunked = [];
  for (let i = 0; i < items.length; i += 3) {
    chunked.push(items.slice(i, i + 3));
  }

  const cardImages = [Card1Pic, Card2Pic, Card3Pic, Card4Pic];

  function categorizesItems() {
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
    <Container fluid>
      <Carousel className="flex-grow-1">
        <Carousel.Item>
          <img
            className="w-100"
            src={LandingPicture1}
            alt="Slide 1"
          />
          <Carousel.Caption className={LandingPageStyles.customCaption}>
            <h3>Welcome to Blvck US</h3>
            <p>Choose from our latest selections of clothing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={LandingPicture2} alt="Slide 2" />
          <Carousel.Caption className={LandingPageStyles.customCaption}>
            <h3>Browse to your content</h3>
            <p>Find the latest outfits and inspire innovation</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <SelectionListing
        mensProducts={mensProducts}
        womensProducts={womensProducts}
        jeweleryProducts={jeweleryProducts}
        electronicProducts={electronicProducts}
      />

      <Container
        fluid
        className="d-flex align-items-center justify-content-center w-100 min-vh-100"
        style={{
          backgroundImage: `url(${AccessoriesImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Row
          className="text-center text-light w-100 py-5 justify-content-center rounded"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }}
        >
          <h1 className="my-3">Accessories & Gadgets</h1>
          <Col className="my-5" xs={12} sm={3} md={2} lg={2} xl={2} xxl={2}>
            <Link className={`${LandingPageStyles.linkAccessories}`} to="/products/jewelery">Jewelery</Link>
          </Col>
          <Col className="my-5" xs={12} sm={3} md={2} lg={2} xl={2} xxl={2}>
            <Link className={`${LandingPageStyles.linkAccessories}`} to="/products/electronics">Electronics</Link>
          </Col>
        </Row>
      </Container>

      <Container fluid className="my-5 p-4 vh-100">
        <div
          className="d-flex overflow-auto h-100 gap-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`${LandingPageStyles.cardContainer} flex-shrink-0 text-white p-5 rounded shadow`}
              style={{backgroundImage: `url(${cardImages[idx % cardImages.length]})`}} >
              <h3 className="bg-dark bg-opacity-50 p-2 my-5 rounded">
                {item.title}
              </h3>
              <p className="bg-dark bg-opacity-50 p-2 my-5 text-center fs-5 rounded">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}
