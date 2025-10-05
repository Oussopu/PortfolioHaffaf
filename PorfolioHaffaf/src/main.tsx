import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/style/main.scss'
import Header from "./components/Header.tsx";

const App = () => {
  return (
        <Router>
            <Header />
          <Routes>
            <Route />
            <Route />
            <Route />
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
