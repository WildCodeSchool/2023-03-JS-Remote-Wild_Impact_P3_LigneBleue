
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test/test" element={<Test2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
