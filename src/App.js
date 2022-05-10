import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './style-google.css';
import './style.css';


function App() {
  return (
    <div>
      <Header></Header>
      <main class='container my-5'>
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>I am a web developer.</p>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
