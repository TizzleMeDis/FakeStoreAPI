import React, { useState, useEffect, useRef } from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import LandingPageStyles from "../styles/LandingPage.module.css";
import LandingPicture1 from "../assets/LandingPictureGirl.jpg";
import LandingPicture2 from "../assets/LandingPictureGuy.jpg";
import AccessoriesImage from "../assets/Accessories.jpg";
import Card1Pic from "../assets/MensClothingCard.jpg";
import Card2Pic from "../assets/WomensClothingCard.jpg";
import Card3Pic from "../assets/JewelryCard.jpg";
import Card4Pic from "../assets/ElectronicsCard.jpg";

import SelectionListing from "./SelectionListing";
import axios from "axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);
  const [jeweleryProducts, setJeweleryProducts] = useState([]);
  const [electronicProducts, setElectronicProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productCategories = {
    products,
    mensProducts,
    womensProducts,
    jeweleryProducts,
    electronicProducts,
  };

  const items = [
    { id: 1, title: "Men's Clothing", text: "Content 1" },
    { id: 2, title: "Women's Clothing", text: "Content 2" },
    { id: 3, title: "Jewelery", text: "Content 3" },
    { id: 4, title: "Electronics", text: "Content 4" },
  ];
  const chunked = [];
  for (let i = 0; i < items.length; i += 3) {
    chunked.push(items.slice(i, i + 3));
  }

  const cardImages = [Card1Pic, Card2Pic, Card3Pic, Card4Pic];
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth / 3;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth / 3;
    }
  };
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
            className="d-relative w-100"
            src={LandingPicture1}
            alt="Slide 1"
          />
          <Carousel.Caption className={LandingPageStyles.customCaption}>
            <h3>First Slide</h3>
            <p>Description for first slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={LandingPicture2} alt="Slide 2" />
          <Carousel.Caption className={LandingPageStyles.customCaption}>
            <h3>Second Slide</h3>
            <p>Description for second slide</p>
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
        className="d-flex align-items-center justify-content-center w-100 min-vh-100 bg-success"
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
          <h1 className="my-3">Accessories to select from</h1>
          <Col className="my-5" xs={12} sm={3} md={2} lg={2} xl={2} xxl={2}>
            <h2>Jewelery</h2>
          </Col>
          <Col className="my-5" xs={12} sm={3} md={2} lg={2} xl={2} xxl={2}>
            <h2>Electronics</h2>
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
              className="flex-shrink-0 text-white p-5 rounded shadow"
              style={{
                width: "calc(100% / 3)",
                height: "100%",
                backgroundImage: `url(${cardImages[idx % cardImages.length]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                scrollSnapAlign: "start",
                alignItems: "center",
              }}
            >
              <h3 className="bg-dark bg-opacity-50 p-2 rounded">
                {item.title}
              </h3>
              <p className="bg-dark bg-opacity-50 p-2 rounded">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}
