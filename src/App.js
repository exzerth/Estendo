import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
