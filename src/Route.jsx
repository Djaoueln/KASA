
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Header from "./components/Navigation";
import Logement from "./pages/Logement";
import Footer from "./components/Footer";

function routes () {
    return (
    <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="logement/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
    )

}

export default routes;