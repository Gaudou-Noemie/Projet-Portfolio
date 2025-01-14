import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import About from './Pages/About';
import Cv from './Pages/Cv';
import Header from './components/Header';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <main className='container'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cv' element={<Cv/>}/>
      <Route path='*' element={<Error/>}/> 
    </Routes>
    </main>
    <Footer/>
    </Router>
   </React.StrictMode>,
  
);


