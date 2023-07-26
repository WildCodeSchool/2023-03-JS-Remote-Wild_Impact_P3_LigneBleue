import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/Layout/UserLayout";
import Formation from "./pages/Users/Formation";
import AdminLayout from "./pages/Layout/AdminLayout";
import TutoAdmin from "./pages/Admin/TutoAdmin";
import Login from "./pages/Login";
import Home from "./pages/Users/Home";
import Progress from "./pages/Users/Progress";
import TutoProgress from "./pages/Users/TutoProgress";
import Help from "./pages/Users/Help";
import Info from "./pages/Users/Info";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import Error from "./pages/Error";
import AccueilAdmin from "./components/AccueilAdmin";

import "./App.css";
import Tutoriel from "./pages/Users/Tutoriel";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="flex flex-col bg-white h-screen">
      <BrowserRouter>
        <div className="bg-yellow h-32">
          <Header />
          <Breadcrumbs />

          <div className="App">
            <Routes>
              <Route path="/" element={<UserLayout />}>
                <Route path="" element={<Home />} />
                <Route path="aide" element={<Help />} />
                <Route path="info" element={<Info />} />
                <Route path="formations" element={<Home />} />
                <Route path="formations/:fid" element={<Formation />} />
                <Route
                  path="formations/:fid/tutoriel/:tid"
                  element={<Tutoriel />}
                />
                <Route path="connexion" element={<Login />} />
                <Route path="inscription" element={<Signup />} />
                <Route path="parcours" element={<Progress />} />
                <Route
                  path="parcours/progression/:fid"
                  element={<TutoProgress />}
                />
                <Route path="*" element={<Error />} />
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="" element={<AccueilAdmin />} />
                <Route path="tuto" element={<TutoAdmin />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
