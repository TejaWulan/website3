import "./App.css";
import { HashRouter , Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import OurServices from "./Pages/OurServices";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          <Route path="/ourservices" element={<OurServices />} />
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detail/:id" element={<BlogDetail />} /> */}
        </Route>
      </Routes>
    </HashRouter >
  );
}

export default App;
