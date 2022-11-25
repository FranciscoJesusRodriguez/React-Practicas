import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
//import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
      <div >
        <NavBar />
      </div>
      <div>
        <ItemListContainer greeting="¡Bienvenidos!" />
      </div>
    </>
  );
}

export default App;