import React from 'react';
import './App.css';
import Sidebar from './components/sidebar.jsx'
import Home from './Pages/Home.jsx';
import Artists from './Pages/Artist.jsx';
import Playlists from './Pages/Playlists.jsx';
import Albums from './Pages/Albums.jsx';
import Downloads from './Pages/Downloads.jsx';
import Songs from './Pages/Song.jsx';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (


    <Router>
      <div className='App'>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Playlists" element={<Playlists />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Albums" element={< Albums/>} />
        <Route path="/Songs" element={<Songs/>} />
       <Route path="/Downloads" element={<Downloads/>} />
    
      </Routes>
        </Sidebar>
      
      </div>

    </Router>

  );
}

export default App;

