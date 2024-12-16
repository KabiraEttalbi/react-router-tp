import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";

// Lazy loading des composants
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Services = lazy(() => import("./components/Services"));
const NotFound = lazy(() => import("./components/NotFound"));
const Products = lazy(() => import("./components/Products"));
const Product = lazy(() => import("./components/Product"));


function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Accueil</NavLink> |
        <NavLink to="/about">À propos</NavLink> |
        <NavLink to="/contact">Contact</NavLink> |
        <NavLink to="/services">Services</NavLink> |
        <NavLink to="/products">Produits</NavLink> 
      </nav>
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />    
          <Route path="/products" element={<Products />} /> 
            <Route path="/product/:id" element={<Product/>}></Route>           
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
