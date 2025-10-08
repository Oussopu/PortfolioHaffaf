import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/style/main.scss'
import Header from "./components/sections/Header.tsx";
import Index from "./pages";
import Contact from "./pages/Contact.tsx";


const App = () => {
  return (
        <Router>
            <Header />
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
