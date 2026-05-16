import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import OurServices from "./Pages/OurServices";
import About from "./Pages/About";
import OurProduct from "./Pages/OurProduct";

function App() {
  return (
    <BrowserRouter basename="/website3">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          <Route path="/ourservices" element={<OurServices />} />
           <Route path="/ourproduct" element={<OurProduct />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
