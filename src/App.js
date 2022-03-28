import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/header";
import Home from "./components/home";
import Movie from "./components/movie";
import NotFound from "./components/notFound";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}
