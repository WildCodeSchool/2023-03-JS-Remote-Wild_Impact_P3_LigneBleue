import { BrowserRouter } from "react-router-dom";
import Footerbis from "./components/Footerbis";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footerbis />
      <BrowserRouter>
        <Breadcrumbs />
      </BrowserRouter>
      <Connexion />
    </div>
  );
}

export default App;
