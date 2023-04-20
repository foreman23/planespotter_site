import React from 'react'
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Portfolio from './screens/Portfolio';
import ImageView from './screens/ImageView';


function App() {

  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/image/:imageID" element={<ImageView></ImageView>}></Route>
          <Route path='*' element={<Contact></Contact>}></Route>
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
