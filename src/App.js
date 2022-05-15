import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './style-google.css';
import './style.css';
import './style-custom.css';


function App() {

  const [currentPage, setCurrentPage] = useState('about');

  useEffect(() => {
    document.title = "Patrick Regan";
  })

  return (
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main className='container my-4'>
        {currentPage === 'about' &&
          <About></About>
        }
        {currentPage === 'portfolio' &&
          <Portfolio
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></Portfolio>
        }
        {currentPage === 'contact' &&
          <Contact></Contact>
        }
        {currentPage === 'resume' &&
          <Resume></Resume>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
