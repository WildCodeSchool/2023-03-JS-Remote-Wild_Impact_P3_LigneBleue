import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/Layout/UserLayout";
import TutorialsList from "./pages/Users/TutorialsList";
import AdminLayout from "./pages/Layout/AdminLayout";
import TutoAdmin from "./pages/Admin/TutoAdmin";
import Connexion from "./pages/Connexion";
import Home from "./pages/Users/Home";
import Advancement from "./pages/Users/Advancement";
import TutoAdvancement from "./pages/Users/TutoAdvancement";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import Erreur from "./pages/Erreur";

import "./App.css";
import Tutoriel from "./pages/Users/Tutoriel";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <BrowserRouter>
        <Header />
        <Breadcrumbs />
        <div className="App">
          <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route path="" element={<Home />} />
              <Route path="formations/:id" element={<TutorialsList />} />
              <Route path="tutoriel/:id" element={<Tutoriel />} />
              <Route path="connexion" element={<Connexion />} />
              <Route path="inscription" element={<Signup />} />
              <Route path="parcours" element={<Advancement />} />
              <Route path="parcours/avancement" element={<TutoAdvancement />} />
              <Route path="*" element={<Erreur />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="tuto" element={<TutoAdmin />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
