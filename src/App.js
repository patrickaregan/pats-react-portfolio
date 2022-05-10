import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import './style-google.css';
import './style.css';
import './style-custom.css';


function App() {

  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main className='container my-5'>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
