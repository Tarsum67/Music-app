import React from "react";
import "../App.css";
import "react-multi-carousel/lib/styles.css";
import Cards from "../components/Cards.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Container } from "react-bootstrap";
function Home() {
  return (
    <>
      <Container className="Home-PG ">
        <h1 className="mt-5">For You</h1>

        <Row className="  mx-2 ">
          <Card className="col-md-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
          <Card className="col-md-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
          <Card className="col-md-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
          <Card className="col-md-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default Home;
