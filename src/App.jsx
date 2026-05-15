import "./App.css";
import { HashRouter , Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import OurServices from "./Pages/OurServices";
import About from "./Pages/About";
import OurProduct from "./Pages/OurProduct";

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          <Route path="/ourservices" element={<OurServices />} />
           <Route path="/ourproduct" element={<OurProduct />} />
        </Route>
      </Routes>
    </HashRouter >
  );
}

export default App;
