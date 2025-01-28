import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load the pages
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Cv = lazy(() => import('./Pages/Cv'));
const Portfolio = lazy(() => import('./Pages/Portfolio'));
const Error = lazy(() => import('./Pages/Error'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);