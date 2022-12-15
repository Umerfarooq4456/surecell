import "./App.css";
import Plansmain from "./components/home/plans/Plansmain";
import Navbar from "./components/Navbar";
import {Route, Routes } from 'react-router-dom';
import Home from "../src/components/home/Home";
import MyAccount_main from "./components/myaccount/MyAccount_main";
import Whyus from "./components/whyus/Whyus";
import Support from "./components/support/Support";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/plansmain" element={<Plansmain/>}/>
        <Route path="/MyAccount" element={<MyAccount_main/>}/>
        <Route path="/WhyUs" element={<Whyus/>}/>
        <Route path="/Support" element={<Support/>}/>
      </Routes>
    </>
  );
}

export default App;
