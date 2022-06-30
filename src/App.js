import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import ProductBuild from "./pages/ProductBuild";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/productBuilder" element={<ProductBuild />} />

        {/* <Route path="/" element={<Home />} /> */}

        <Route path="*" element={"404"} />
      </Routes>
    </div>
  );
}

export default App;


function Home() {
  document.title = 'Home'
  window.location.href='/Home/index.html'

  return (
    <></>
  )
}
