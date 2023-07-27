import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/HomePage/Home';
import About from './Pages/AboutPage/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">

        <Router>
        <Header/>
      
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<About/>} />
            <Route path='/work' element={<About/>} />
          </Routes>

        </Router>
        <Footer />

    </div>
  );
}

export default App;
