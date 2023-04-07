import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./screens/Home";
import Back from "./screens/Back";



function App() {

  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/back" element={<Back></Back>}></Route>
        </Routes>
        <div className='footerContainer'>
          <Footer></Footer>
          <p style={{ alignContent: 'center', textAlign: 'center', color: 'grey', fontWeight: 'lighter', padding: '10px' }}>@ 2023 - JulianElnasser - All Rights Reserved</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
