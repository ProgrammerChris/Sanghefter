import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CornerButton from './components/cornerbutton';
import Booklet from "./components/booklet/booklet";
import Artists from "./components/Artists";
import Songs from "./components/songs";

import data from './moch.json';  //TODO: Get JSON from API and store in localStorage

const App = () => {

  if (!sessionStorage.getItem('booklet')) {
    console.log("added");
    sessionStorage.setItem('booklet', '[]')
  }

  return (
    <Router>
      <Link style={logoLinkStyle} to="/"><h1>Gitarhefte</h1></Link>
      <Link style={bookletLinkStyle} to="/booklet"><CornerButton /></Link>
      <Routes>
        <Route path="/" element={<Artists artists={data} />} />
        <Route path="/:artist" element={<Songs artists={data} />} />
        <Route path="booklet" element={<Booklet />} />
      </Routes>
    </Router>
  )
}

const bookletLinkStyle = {
  textDecoration: "none",
  gridColumn: "4",
  gridRow: "1",
  justifySelf: "end",
}

const logoLinkStyle = {
  justifySelf: "start",
  textDecoration: "none",
  gridColumn: "2",
  gridRow: "1",
}




export default App;
