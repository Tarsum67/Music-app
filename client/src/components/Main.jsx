import React from 'react';
import Sidebar from './sidebar'
import Home from '../Pages/Home.jsx';
import Artists from './Pages/Artist.jsx';
import Playlists from './Pages/Playlists.jsx';
import Albums from './Pages/Albums.jsx';
import Downloads from './Pages/Downloads.jsx';
import Songs from './Pages/Song.jsx';


function Main() {
  return (
    <div>
    <Sidebar>
    <Home/>
    <Playlists/>
    <Artists/>
    <Albums/>
    <Downloads/>
    <Songs/>

    </Sidebar>
  </div>
  )
}

export default Main