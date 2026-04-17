import "./App.css";
import { HashRouter , Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detail/:id" element={<BlogDetail />} /> */}
        </Route>
      </Routes>
    </HashRouter >
  );
}

export default App;
