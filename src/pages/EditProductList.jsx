import React, { useEffect, useState } from "react";
import { AddItem, EditItem, DeleteItem } from "../components/apiRequest";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

export default function EditProductList() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const submitNewItem = async () => {
    try {
      const axios = require("axios");
      const product = { title: "New Product", price: 29.99 };
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        product
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const editItem = async () => {
    try {
      const axios = require("axios");
      const product = { title: "New Product", price: 29.99 };
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        product
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteItem = async () => {
    try {
      const axios = require("axios");
      const product = { title: "New Product", price: 29.99 };
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        product
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let product = { title: "New Product", price: 29.99 };
    axios
      .post("https://fakestoreapi.com/products", product)
      .then((response) => console.log(response.data));
    axios
      .delete("https://fakestoreapi.com/products/20")
      .then((response) => console.log(response.data));
    product = { title: "Updated Product", price: 39.99 };
    axios
      .put("https://fakestoreapi.com/products/1", product)
      .then((response) => console.log(response.data));
  }, []);

  return (
    <Container className="my-5">
      <Tabs
        defaultActiveKey="add"
        id="uncontrolled-tab-example"
        className="my-3"
      >
        <Tab className="my-4" eventKey="add" title="Add">
          Adding new product to store.
          <AddItem />
        </Tab>
        <Tab className="my-4" eventKey="edit" title="Edit">
          Edit product to store.
          <EditItem />
        </Tab>
        <Tab className="my-4" eventKey="delete" title="Delete">
          Delete product to store.
          <DeleteItem />
        </Tab>
      </Tabs>
    </Container>
  );
}
