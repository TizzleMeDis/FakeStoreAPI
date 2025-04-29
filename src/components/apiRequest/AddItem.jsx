import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

export default function AddProductForm() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "id" || name === "price" ? Number(value) : value;
    setProduct((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        product
      );
      setMessage({ type: "success", text: "Product added successfully!" });

      console.log(response.data);
      setProduct({
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
      });

      e.target.reset();
    } catch (error) {
      setMessage({ type: "danger", text: "Failed to add product." });
      console.error(error);
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">Add Product</h2>

      {message && <Alert variant={message.type}>{message.text}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Enter price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Enter description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Enter category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
