import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Routes >
        <Route path={"/"} element={< ItemListContainer />} />
        <Route path={"/category/:id"} element={< ItemListContainer />} />
        <Route path={"/item/:id"} element={< ItemDetailContainer />} />
        <Route path={"*"} element={< Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;