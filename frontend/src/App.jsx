import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";

import "./App.css";

function App() {
  return (
  <div className="App">
    <Header />
    <Breadcrumbs />
    <Home />
    <Connexion />
  </div>
  );
}

export default App;
