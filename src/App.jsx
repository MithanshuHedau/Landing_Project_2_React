import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Button } from '@chakra-ui/react';
import Header from './components/Header';
import FreeVideo from './components/FreeVideo';
import Videos from './components/Videos'
import Upload from './components/Upload'
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/videos" element={<FreeVideo/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App