import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoFoodFound from './components/pages/NoFoodFound';
import Navbar from './components/elements/navbar/Navbar';
import Footer from './components/elements/footer/Footer';
import Body from './components/home-page-body/Body';
import './App.css';
import FoodDetails from './components/pages/foodDetails/FoodDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Body/>} />
          <Route path='/not-found' element={<NoFoodFound/>} />
          <Route path='/food-details/:id' element={<FoodDetails/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
