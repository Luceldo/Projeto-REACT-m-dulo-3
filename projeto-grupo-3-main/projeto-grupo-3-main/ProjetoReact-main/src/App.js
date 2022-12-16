import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Form from './components/Form/Form';
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import OurTeam from './components/OurTeam/OurTeam';
import AboutUs from './components/AboutUs/AboutUs';
import NoPage from './components/NoPage/NoPage';
import ToEdit from './components/Edit/ToEdit';
import Delet from './components/Delet/Delet';
import Create from './components/Create/Create';
import Hotels from './components/Hotels/Hotels';

function App() {
  
    return (
      <div className="App">  
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/hoteis" element={<Hotels/>} />
              <Route path="/sobre-nos" element={<AboutUs/>} />
              <Route path="/nosso-time" element={<OurTeam/>} />
              <Route path="/contato" element={<Form/>} />
              <Route path="/criar" element={<Create/>} />
              <Route path="/editar/:barra/:id" element={<ToEdit/>} />
              <Route path="/deletar/:barra/:id" element={<Delet/>} />
              <Route path="*" element={<NoPage/>} />
            </Routes>
        </Router>
        <Footer />
      </div>
    );
}

export default App;
