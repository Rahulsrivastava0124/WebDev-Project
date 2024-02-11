import React from 'react'
import HomePage from './Components/HomePage';
import CardContainer from './Components/Cards/CardContainer';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <CardContainer />
      <Footer />
      
    </div>
  );
}

export default App;
