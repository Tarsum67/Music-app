import React from "react";
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import { useState } from "react";
import  accessToken  from "../Pages/Search";
export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  //Search
  async function search() {
    console.log("Search for " + searchInput);
    //Get request using search to get Artist ID
    var artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + accessToken,
      },
    }
    var artistID = await fetch('http//api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
    .then(response => response.json())
    .then(data => {return data.artist.items[0].id})
    console.log("Artist ID is " + artistID);
    //Get Request with Artist ID Grab all Albums from that Artist

    //Display Search
  }
  return (
    <div className="navBarContent">
      <InputGroup className="navSearchBar">
        <FormControl type="text" placeholder="search" />
        <Button>Search</Button>
      </InputGroup>
    </div>
  );
}

