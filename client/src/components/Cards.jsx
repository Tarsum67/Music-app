import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Container } from "react-bootstrap";
export default function Cards() {
  return <>
  <Container>
    <Card>
      <Card.Img src="#"/>
      <Card.Title>Album Name Here</Card.Title>
    </Card>
  </Container>
  </>;
}
