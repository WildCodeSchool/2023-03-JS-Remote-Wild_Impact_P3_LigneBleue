import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/Layout/UserLayout";
import Tutorials from "./pages/Users/Tutorials";
import OneTuto from "./pages/Users/OneTuto";
import AdminLayout from "./pages/Layout/AdminLayout";
import TutoAdmin from "./pages/Admin/TutoAdmin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Breadcrumbs />
        <div className="App">
          <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route path="tutorials" element={<Tutorials />} />
              <Route path="tutorials/:id" element={<OneTuto />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="tuto" element={<TutoAdmin />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
