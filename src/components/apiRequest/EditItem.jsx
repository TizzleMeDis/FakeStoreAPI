import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

export default function EditItem() {
  const [id, setId] = useState(0);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("Edit Data Page", response.data);
        setProducts(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (id) {
      const selectedProduct = products.find((p) => p.id === Number(id));
      if (selectedProduct) {
        setProduct({
          title: selectedProduct.title,
          price: selectedProduct.price,
          description: selectedProduct.description,
          category: selectedProduct.category,
          image: selectedProduct.image,
        });
      }
    }
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "id" || name === "price" ? Number(value) : value;
    setProduct((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        product
      );
      setMessage({ type: "success", text: "Product edited successfully!" });

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
      setMessage({ type: "danger", text: "Failed to edit product." });
      console.error(error);
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">Edit Product</h2>

      {message && <Alert variant={message.type}>{message.text}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Label>Select Product</Form.Label>
        <Form.Select
          name="productId"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        >
          <option value={0}>-- Choose a Product --</option>
          {products.map((item, key) => (
            <option value={item.id} key={key}>
              {item.title}
            </option>
          ))}
        </Form.Select>

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
          Edit
        </Button>
      </Form>
    </Container>
  );
}
