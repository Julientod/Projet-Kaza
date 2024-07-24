import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUs from "./pages/aboutUs/AboutUs";
import ErrorPage from "./pages/error-page/ErrorPage";
import Home from "./pages/home/Home";
import Logement from "./pages/logement/Logement";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/logement/:id" element={<Logement />} />

            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/ErrorPage" element={<ErrorPage />} />
            <Route exact path="/*" element={<Navigate replace to="/error" />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
