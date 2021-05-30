import React, { useState } from "react";
import logo from "./logo.svg";
import "./Specs.css";
import { Tabs, Tab } from "react-bootstrap";

function Specs() {
  const [key, setKey] = useState("productInfo");

  return (
    <div className="container">
      <h1>Product Details</h1>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="productInfo" title="Product Information"></Tab>

        <Tab eventKey="inspectionPoints" title="Inspection Points"></Tab>

        <Tab eventKey="defects" title="Common Defects"></Tab>

        <Tab eventKey="scrap" title="Recent Issues"></Tab>
      </Tabs>
    </div>
  );
}

export default App;
