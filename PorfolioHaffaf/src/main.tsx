import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/style/main.scss'
import Header from "./components/sections/Header.tsx";
import Index from "./pages";
import Contact from "./pages/Contact.tsx";

type Tone = 'light' | 'dark';

const App = () => {
    const [tone, setTone] = useState<Tone>('light');

    return (
        <Router>
            <Header tone={tone} />
            <Routes>
                <Route path="/" element={<Index onEnterTone={setTone} />} />
                <Route path="/contact" element={<Contact onEnterTone={setTone} />} />
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
