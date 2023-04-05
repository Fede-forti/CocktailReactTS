import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCocktail from "./components/Navbar";
import FiltroCategoria from "./pages/FiltroCategoria";
import FiltroBicchiere from "./pages/FiltroBicchiere";
import FiltroIngrediente from "./pages/FiltroIngrediente";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter> 
      <NavbarCocktail />
      <Routes>
      <Route path="/" element={<FiltroCategoria/>} />
      <Route path="/categoria" element={<FiltroCategoria/>} /> 
      <Route path="/bicchiere" element={<FiltroBicchiere/>} />
      <Route path="/ingrediente" element={<FiltroIngrediente/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
