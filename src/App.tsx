import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Portfolio} from "./Components/Portfolio/Portfolio";
import {AboutMe} from "./Components/AboutMe/AboutMe";
import {Contacts} from "./Components/Contacts/Contacts";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <div>
                  <Routes>
                      <Route path={'/portfolio-new-'} element={<Portfolio/>}/>
                      <Route path={'/aboutMe'} element={<AboutMe/>}/>
                      <Route path={'/contacts'} element={<Contacts/>}/>
                  </Routes>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
