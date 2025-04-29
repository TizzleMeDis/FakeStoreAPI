import React from "react";
import { AddItem, EditItem, DeleteItem } from "../components/apiRequest";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function EditProductList() {
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
