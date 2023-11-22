import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VansLife from "./VansLife";
import "./server";
import VansDetails from "./VanDetails";
import Layout from "./components/layout";
import About from "./pages/about";
import Home from "./pages/Home";
import Dashboard from "./pages/host/Dashbord";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import DashboardLayout from "./components/DashboardLayout";
import Vans from "./components/Vans";
import HostVansDetail from "./components/HostVansDetail";

import Detail from "./components/Detail";
import Pictures from "./components/Pictures";
import Price from "./components/Price";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path="vans" element={<VansLife />} />
          <Route path="vans/:id" element={<VansDetails />} />

          <Route path="host" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<Vans />} />

            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<Detail />} />
              <Route path="pictures" element={<Pictures />} />
              <Route path="price" element={<Price />} />
            </Route>
          </Route>
        </Route>

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
