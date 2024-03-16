import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import { Container, Row, Card } from "react-bootstrap";
const CLIENT_ID = "ad4f30885d2b424ab684cb462dc2b0f4";
const CLIENT_SECRET = "84b0f6da04d74eed803be9ec3d04110c";
export default function Search() {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    //Api Access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);
  return (
    <>
      <div className="SearchPage">
        <NavBar />
        <Container>
          <Row className="mx-2 row row-cols-4">
            <Card>
              <Card.Img src="#"/>
              <Card.Body>
                <Card.Title>Album Name here</Card.Title>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}
