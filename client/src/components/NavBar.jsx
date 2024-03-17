import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const CLIENT_ID = "ad4f30885d2b424ab684cb462dc2b0f4";
const CLIENT_SECRET = "84b0f6da04d74eed803be9ec3d04110c";
export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [album, setalbums] = useState([]);
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
  //Search
  async function search() {
    console.log("Search for " + searchInput);
    //Get request using search to get Artist ID
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };
    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log("Artist ID is " + artistID);

    //Get Request with Artist ID Grab all Albums from that Artist
    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.items);
      });
    //Display Search
  }
  return (
    <div className="navBarContent">
      <InputGroup className="navSearchBar">
        <FormControl
          type="text"
          placeholder="search"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              search();
            }
          }}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button onClick={search}>Search</Button>
      </InputGroup>
    </div>
  );
}
