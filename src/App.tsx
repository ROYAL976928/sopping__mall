import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import StoreDirectory from './pages/StoreDirectory';
import MallMap from './pages/MallMap';
import VirtualTour from './pages/VirtualTour';
import UserAccount from './pages/UserAccount';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<StoreDirectory />} />
            <Route path="/map" element={<MallMap />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/account" element={<UserAccount />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;